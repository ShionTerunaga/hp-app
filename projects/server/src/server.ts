import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { appConfig } from "./shared/config";
import { sampleRouter } from "./router/sample";
import { authRouter } from "./router/auth";
import { hogeController } from "./controllers/hogeController";
import noImpl from "./noImpl";

const app = express();
const port = appConfig.port;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(cors({
    origin: "http://localhost:6060",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use(appConfig.router.sample.base, sampleRouter);
app.get(appConfig.router.hoge.base, hogeController);

app.get("/", noImpl);

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
