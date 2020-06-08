const http = require("http");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");

// events
const {
  onJoin,
  onSendMessage,
  onDisconnect,
} = require("./controllers/eventsController");

// text coloring
const error = chalk.red;
const success = chalk.blue;
const iosuccess = chalk.magenta;

// handle ue
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", error(err.name), error(err.message));
  process.exit(1);
});

dotenv.config({ path: "./.env" });

// require app from app.js
const app = require("./app");

// create http server using app
const server = http.createServer(app);

// enhance server with socketio
const io = socketio(server);

// listen for connection event, perform certain task within connection body
io.on("connection", (socket) => {
  console.log(iosuccess("io connection established"));

  // server consumes 'join', 'sendMessage', 'disconnect'
  // server emits 'message', 'roomData'
  onJoin(socket, io);
  onSendMessage(socket, io);
  onDisconnect(socket, io);

  // client consumes 'message', 'roomData'
  // client emmits 'join', 'sendMessage', 'disconnect'
});

// run http server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(
    success(
      `Server is up and listening for incoming requests at port: ${port}!`
    )
  );
});

// ignore db connection, I was thinking storing state in db rather than on server
// db
const db = process.env.DB.replace("*PASSWORD*", process.env.DB_PASSWORD);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(success("DB Connected Successfully!"));
  })
  .catch((err) => {
    console.log(error(err.name), error(err.message));
  });

// handle ur
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", error(err.name), error(err.message));
  server.close(() => {
    process.exit(1);
  });
});

// handle sigterm
process.on("SIGTERM", () => {
  console.log(chalk.magenta("SIGTERM RECIEVED. Shutting down..."));
  server.close(() => {
    console.log(chalk.magenta("Process termitated..."));
  });
});
