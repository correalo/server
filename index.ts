import "reflect-metadata";
import { createConnection } from "typeorm";
import { Surgery } from "./entity/Surgery";
createConnection()
  .then(async (connection) => {
    console.log("Inserting a new surgery into the database...");
    const surgery = new Surgery(
      "Jose",
      new Date(),
      "ccc",
      "amil",
      111.11,
      "hospital",
      true
    );

    await connection.manager.save(surgery);
    console.log("Saved a new surgery with id: " + surgery.id);

    console.log("Loading surgerys from the database...");
    const surgeries = await connection.manager.find(Surgery);
    console.log("Loaded surgerys: ", surgeries);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
