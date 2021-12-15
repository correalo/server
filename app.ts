import express from "express"
import path from "path"
import cookieParser from "cookie-parser" 
import "reflect-metadata";
import { surgeriesRouter } from "./routes/surgeries";
import { indexRouter } from "./routes/index";
import logger from "morgan"
import { createConnection } from "typeorm";

createConnection().then(__conn => {
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/surgeries", surgeriesRouter);

  // start express server
  app.listen(3000);
})
.catch(error =>{
  console.error("Error connecting to database", error)
});

