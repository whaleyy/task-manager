// //CRUD create read update delete

// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;

// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectID();
// // console.log(id.id.length);
// // console.log(id.toHexString().length);
// // console.log(id.getTimestamp());

// MongoClient.connect(
//   connectionURL,
//   //{ useNewUrlParser: true },
//   { useUnifiedTopology: true },
//   (error, client) => {
//     if (error) {
//       console.log("unable to connect to database!");
//     }
//     const db = client.db(databaseName);

//     /* create
//     db.collection("users").findOne({ name: "Jen" }, (error, user) => {
//       if (error) {
//         return console.log("Unable to fetch");
//       }

//       console.log(user);
//     });
//     */

//     /* read
//     db.collection("users")
//       .find({ age: 27 })
//       .toArray((error, users) => {
//         console.log(users);
//       });

//     db.collection("users")
//       .find({ age: 27 })
//       .count((error, users) => {
//         console.log(users);
//       });
//       */

//     /* update
//     db.collection("tasks")
//       .updateMany(
//         {
//           completed: false,
//         },
//         {
//           $set: {
//             completed: true,
//           },
//         }
//       )
//       .then((result) => {
//         console.log(result.modifiedCount);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       */

//     db.collection("User")
//       .deleteMany({
//         age: 26,
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );
