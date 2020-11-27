import dotenv from "dotenv";
dotenv.config();

/* APP */
export const APP_PORT = process.env.PORT;
export const APP_ZONE = process.env.APP_ZONE;

/* ORM */
export const ORM_SYNCHRONIZE = process.env.APP_ZONE === "development" ? true : false;

/* DB */
export const ORM_DB_TYPE = process.env.ORM_DB_TYPE;
export const ORM_DB_HOST = process.env.ORM_DB_HOST;
export const ORM_DB_PORT = process.env.ORM_DB_PORT;
export const ORM_DB_USERNAME = process.env.ORM_DB_USERNAME;
export const ORM_DB_PASSWORD = process.env.ORM_DB_PASSWORD;
export const ORM_DB_NAME = process.env.ORM_DB_NAME;
export const ORM_DB_SCHEMA =
  process.env.APP_ZONE === "production" ? `${process.env.APP_NAME}_production` : `${process.env.APP_NAME}_development`;
