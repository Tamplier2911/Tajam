// colorful
const iosuccess = require("chalk").magenta;

// user handlers
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./userController");

// utils
const { uuidv4 } = require("../utils/uuid");

/*********************** ON JOIN ***************************/
exports.onJoin = (socket, io) => {
  socket.on("join", (data, cb) => {
    // console.log(data);

    const { name, room } = data;
    const { error, user } = addUser({ id: socket.id, name, room });

    // if cb executed, callback on client-side is triggered
    if (error) return cb(error);

    // system message
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to ${user.room} room.`,
      time: Date.now(),
      id: uuidv4(),
    });

    // broadcast send message to everyone bisides joined user
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined!`,
      time: Date.now(),
      id: uuidv4(),
    });

    // join to room from returned user object
    // so we know that user is unique and user input is cleaned up
    socket.join(user.room);

    // emit room data event, can be handled on front-side to get total users in channel
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    // callback on frontend will run / if statement will handle an error
    cb();
  });
};

/*********************** ON SEND MESSAGE ***************************/
exports.onSendMessage = (socket, io) => {
  socket.on("sendMessage", (message, cb) => {
    // get current user object
    const user = getUser(socket.id);

    // which room we are sending message to
    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
      time: Date.now(),
      id: uuidv4(),
    });

    // invoke cb so we can do something after message is sent
    // console.log(message, cb, "from server");
    // cb();
  });
};

exports.onDisconnect = (socket, io) => {
  /*********************** ON DISCONNECT ***************************/
  socket.on("disconnect", () => {
    console.log(iosuccess("User disconnected."));

    // on disconnect remove user from users collection
    const user = removeUser(socket.id);

    if (user) {
      // if user removed - broadcast send message to everyone bisides removed user
      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name}, has left the room!`,
      });

      // renew users state of certain room, can be handled on front-side to get total users in channel
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
};
