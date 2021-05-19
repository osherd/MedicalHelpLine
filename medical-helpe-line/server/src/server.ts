import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import userRouter from "./routes/users";
const PORT = 4000;


const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.get("/", userRouter);
app.post("/api/login", userRouter);
app.put("/:id", userRouter);
app.delete("/:id", userRouter);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

