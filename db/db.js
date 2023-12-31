import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

export const sequelize = new Sequelize(dbName, dbUsername, dbPass, {
  dialect: "postgres",
  port: port,
  host: host,
  logging: false,
});