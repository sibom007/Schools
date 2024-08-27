import mySql from "./utils/mySql";
import { Server } from "http";
import app from "./app";
import config from "./config";

async function main() {
  //  try {
  //    await mySql.query("SELECT 1");
  //    console.log("Database connected");

  //    const server: Server = app.listen(config.port, () => {
  //      console.log(`Server is running on port ${config.port}`);
  //    });
  //  } catch (err) {
  //    console.log(err);
  //  }

  const server: Server = app.listen(config.port, () => {
    console.log(`server is runing in port ${config.port}`);
  });
}
main();
