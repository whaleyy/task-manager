const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: "Yang",
//   email: "Myemail@yang.io",
//   password: "phone098",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

/*eg
const task = new Task({
  description: "  Eat lunch",
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
  */
