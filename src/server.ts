import fs from "fs";
import https from "https";
import { createConnection } from "typeorm";
import app from "./App";
import { APP_PORT, APP_ZONE } from "./shared/configs/app";
import { ORM_CONFIG } from "./shared/configs/orm";
import { createUserDao } from "./shared/dao/users";

if (APP_ZONE === "production") {
  const sslCertificates = {
    key: fs.readFileSync("/path/to/key"),
    cert: fs.readFileSync("/path/to/cert"),
    ca: fs.readFileSync("/path/to/ca"),
  };

  https.createServer(sslCertificates, app).listen(APP_PORT, async () => {
    await createConnection(ORM_CONFIG);
    console.log("Listening on port: " + APP_PORT);
  });
} else {
  app.listen(APP_PORT, async () => {
    await createConnection(ORM_CONFIG);
    console.log("Listening on port: " + APP_PORT);

    /* For testing purpose pero dapat sa service lang tinatawag ang DAO */
    // await retrieveUserDao();
    await createUserDao();
  });
}
