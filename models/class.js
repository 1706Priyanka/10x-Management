const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: { type: String },
  studentsNumber: { type: Number },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
