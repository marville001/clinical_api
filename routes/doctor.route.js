const router = require("express").Router();

const doctorController = require("../controllers/doctor.controller");
const {
  addDoctorController,
  getAllDoctorsController,
  getDoctorController,
  updateDoctorController,
} = require("../controllers/doctor.controller");

const auth = require("../middlewares/auth");
const schemaValidator = require("../middlewares/schemaValidator");
const { addDoctorSc } = require("../shema-validators/doctor.validators");

router.get("/", getAllDoctorsController);
router.post("/", schemaValidator(addDoctorSc, "body"), addDoctorController);
router.get("/:id", getDoctorController);
router.put("/update", updateDoctorController);

module.exports = router;
