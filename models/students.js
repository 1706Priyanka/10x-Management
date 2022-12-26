const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  _classId: { type: mongoose.Types.ObjectId, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
