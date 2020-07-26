const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// without express middleware : new request -> run route handler
// with middleware: new request -> do something(function) -> run route handler

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

/*
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();
*/

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5f1affba34f480d450b7b84a");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  // const user = await User.findById("5f1aff230edec1d343d9c459");
  // await user.populate("tasks").execPopulate();
  // console.log(user.tasks);
};

main();
