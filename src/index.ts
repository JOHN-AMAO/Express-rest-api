import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen("8080", () => {
  console.log("Your seerver is running on http://localhost:8080/");
});

const MONGO_URL =
  "mongodb+srv://amaojohn:84522222@rest-api.ebgjdhh.mongodb.net/?retryWrites=true&w=majority&appName=Rest-API";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: any) => {
  console.log(error);
});
