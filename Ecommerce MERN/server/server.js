const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to the database
mongoose
  .connect("mongodb://localhost:21017/latestdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");

    // Define a Mongoose model
    const User = mongoose.model("User", {
      name: String,
      age: Number,
    });

    // Example: Retrieve all users from the database
    User.find({}, (err, users) => {
      if (err) {
        console.error(err);
      } else {
        console.log("All users:", users);
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server Started");
});
