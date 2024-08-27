import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

const config = {
  dbpassword: process.env.DBPASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
};
if (!config.database) {
  console.error("Database URL is not set in environment variables");
  process.exit(1);
}
export default config;
