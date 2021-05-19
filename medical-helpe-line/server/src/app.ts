import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
}));

export default app;