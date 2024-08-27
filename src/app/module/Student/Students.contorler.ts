import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { Studentservise } from "./Student.service";

const createSchool = catchAsync(async (req, res) => {
  await Studentservise.createSchoolIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "School registered successfully",
    data: {},
  });
});

const ListAllschoolSchool = catchAsync(async (req, res) => {
  const Info = {
    latitude: Number(req.query.latitude),
    longitude: Number(req.query.longitude),
  };
  const result = await Studentservise.ListAllSchool(Info);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "School Get successfully",
    data: result,
  });
});

export const SchoolControllers = {
  createSchool,
  ListAllschoolSchool,
};
