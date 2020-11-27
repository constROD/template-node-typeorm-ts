import { createConnection } from "typeorm";
import app from "./App";
import { APP_PORT } from "./shared/configs/app";
import { ORM_CONFIG } from "./shared/configs/orm";

app.listen(APP_PORT, async () => {
  await createConnection(ORM_CONFIG);
  console.log("Listening on port: " + APP_PORT);
});
