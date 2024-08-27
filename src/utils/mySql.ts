import mysql from "mysql2/promise";
import config from "../config";

// const mySql = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "school",
//   password: config.dbpassword,
// });
const mySql = async (): Promise<mysql.Connection> => {
  try {
    if (config.database) {
      return await mysql.createConnection(config.database);
    } else {
      throw new Error("Database configuration is undefined");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default mySql;
