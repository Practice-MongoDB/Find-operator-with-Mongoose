const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Nodemy");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: String,
    password: String,
    age: Number,
    salary: Number,
  },
  {
    collection: "Account",
  }
);

const accountModel = mongoose.model("Account", accountSchema);

//Find Data
accountModel
  .find({
    username: /student/,
    age: { $gte: 19 },
    // $or: [{ username: /student/ }, { age: { $gte: 19 } }],
    // salary: { $in: [800, 900] },
  })
  //   .skip(1)
  //   .limit(1)
  //   .sort("age")
  .then((data) => console.log("Log :  data", data))
  .catch((err) => console.log("Log :  err", err));
