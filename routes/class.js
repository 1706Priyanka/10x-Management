const router = require("express").Router();
router.use(require("express").json());
const student = require("../models/students");
const myclass = require("../models/class");

//create student class

router.post("/v1/myClass", (req, res) => {
  new myclass(({ name, studentName } = req.body))
    .save()

    .then((myclass) => {
      res.status(201).json(myclass);
    })
    .catch((e) => {
      console.log(e);
    });
});

//register
router.post("/v1/myClass/:myClassId/students", (req, res) => {
  new student({ name: req.body.name, _classId: req.params.myClassId })
    .save()
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((e) => {
      console.log(e);
    });
});

//get
router.get("/v1/myClass", (req, res) => {
  myclass
    .find({})
    .then((myclass) => {
      res.status(200).json(myclass);
    })
    .catch((e) => {
      console.log(e);
    });
});

//get specific class

router.get("/v1/myClass/:myClassId", (req, res) => {
  myclass
    .findOne({ _id: req.params.myClassId })
    .then((myclass) => res.status(200).json(myclass))
    .catch((e) => {
      res.status(404).json("There is no class at that id");
      console.log(e);
    });
});

//get all students in a specific class
router.get("/v1/myClass/:myClassId/students", (req, res) => {
  student
    .find({ _classId: req.params.myClassId })
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((e) => {
      res.status(404).json("There are no students at this class");
      console.log(e);
    });
});

//get one student

router.get("/v1/myClass/:myClassId/students/:studentId", (req, res) => {
  student
    .findOne({
      _classId: req.params.myClassId,
      _id: req.params.studentId,
    })
    .then((onestudent) => {
      res.status(200).json(onestudent);
    })
    .catch((e) => {
      res.status(404).json(e);
    });
});

//update student information
router.put("/v1/myClass/:myClassId/students/:studentId", (req, res) => {
  myclass
    .findOneAndUpdate(
      { _id: req.params.myClassId, _id: req.params.studentId },
      { $set: req.body }
    )
    .then((myclass) => {
      res.status(204).json(myclass);
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = router;
