const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");

const error = chalk.red;
const success = chalk.blue;

// handle ue
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", error(err.name), error(err.message));
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

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

// server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(
    success(
      `Server is up and listening for incoming requests at port: ${port}!`
    )
  );
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
