import path from "path";
import { createConnection } from "typeorm";
import {
  ORM_DB_HOST,
  ORM_DB_NAME,
  ORM_DB_PASSWORD,
  ORM_DB_PORT,
  ORM_DB_SCHEMA,
  ORM_DB_TYPE,
  ORM_DB_USERNAME,
  ORM_SYNCHRONIZE,
} from "./app";

export const ORM_CONFIG = {
  type: ORM_DB_TYPE,
  host: ORM_DB_HOST,
  port: ORM_DB_PORT,
  username: ORM_DB_USERNAME,
  password: ORM_DB_PASSWORD,
  database: ORM_DB_NAME,
  schema: ORM_DB_SCHEMA,
  synchronize: ORM_SYNCHRONIZE,
  name: "default",
  logging: true,
  entities: [path.join(__dirname, "../../entities/*.*")],
  migrations: [path.join(__dirname, "../../migrations/*.*")],
  cli: {
    migrationsDir: "src/migrations",
  },
} as Parameters<typeof createConnection>[0];
