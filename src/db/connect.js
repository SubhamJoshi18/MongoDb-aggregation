const mongoose = require("mongoose");

const start = () => {
  mongoose.connect("mongodb://localhost:27017/mongo");

  mongoose.connection.on("connected", () => {
    console.log("Database is connected SuccessFully");
  });

  mongoose.connection.on("error", () => {
    console.log("Error Connecting on database");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database is Disconnected");
  });
};

module.exports = start;
