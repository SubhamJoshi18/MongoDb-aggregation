const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

module.exports = mongoose.model("Course", CourseSchema);
