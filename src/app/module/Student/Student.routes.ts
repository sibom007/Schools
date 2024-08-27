import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SchoolControllers } from "./Students.contorler";
import { SchoolValidation } from "./Student.zodvalidation";

const router = express.Router();

router.post(
  "/addSchool",
  validateRequest(SchoolValidation.addschool),
  SchoolControllers.createSchool
);
router.get("/listSchools", SchoolControllers.ListAllschoolSchool);

export const SchoolRoutes = router;
