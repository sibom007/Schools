import httpStatus from "http-status";
import { ISchool, ISchoolList } from "../../../types/School.type";
import AppError from "../../Error/AppError";
import mySql from "../../../utils/mySql";
import { v4 as uuidv4 } from "uuid";
import { calculateDistance } from "../../../helper/calculateDistance";

const createSchoolIntoDB = async (payload: ISchool) => {
  const db = await mySql();
  const { name, address, latitude, longitude } = payload;
  if (!name || !address || !latitude || !longitude) {
    throw new AppError(httpStatus.NOT_FOUND, "Please provide all the fields");
  }

  const result = await db.query(
    "INSERT INTO school (name, address, latitude, longitude) VALUES ( ?, ?, ?,?)",
    [name, address, latitude, longitude]
  );
  console.log(result);
  return result;
};
const ListAllSchool = async (payload: ISchoolList) => {
  const db = await mySql();
  try {
    const [schools] = (await db.query(
      "SELECT id, name, address, latitude, longitude FROM school"
    )) as [ISchool[], any];
    const sortedSchools = schools
      .map((school: ISchool) => ({
        ...school,
        distance: calculateDistance(
          payload.latitude,
          payload.longitude,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
    return sortedSchools;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, "Something went wrong");
  }
};

export const Studentservise = {
  createSchoolIntoDB,
  ListAllSchool,
};
