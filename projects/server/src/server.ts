import express from "express";
import cors from "cors";
import { appConfig } from "./shared/config";
import { sampleRouter } from "./router/sample";
import { hogeController } from "./controllers/hogeController";
import noImpl from "./noImpl";

const app = express();
const port = appConfig.port;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(cors({
    origin: "http://localhost:6060"
}));
app.use(express.json());

app.use(appConfig.router.sample.base, sampleRouter);
app.get(appConfig.router.hoge.base, hogeController);

app.get("/", noImpl);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
