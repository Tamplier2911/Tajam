const users = [];

// add user
exports.addUser = ({ id, name, room }) => {
  // clean up user input
  name = name.trim();
  name = name.trim();

  // user with this name already exists in this room
  const isUserNameNotUnique = users.find(
    (user) => user.room === room && user.name === name
  );

  // if use with this name already exists return error
  if (isUserNameNotUnique)
    return { success: false, error: "This username is already taken." };

  // else push user to the users colleciton
  const user = { id, name, room };
  users.push(user);

  // return user object
  return { user };
};

// remove user by id
exports.removeUser = (id) => {
  // find user position
  const index = users.findIndex((user) => user.id === id);
  // if there is such user splice it out and return user object
  if (index !== -1) return users.splice(index, 1)[0];
};

// get user by id
exports.getUser = (id) => {
  // return user object
  return users.find((user) => user.id === id);
};

// get all users in room
exports.getUsersInRoom = (room) => {
  // return all users in certain room
  return users.filter((user) => user.room === room);
};
