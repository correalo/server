var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Surgery } from "./entity/Surgery";

var logger = require("morgan");

var indexRouter = require("./routes/index");
var surgeriesRouter = require("./routes/surgeries");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/surgeries", surgeriesRouter);

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

module.exports = app;
