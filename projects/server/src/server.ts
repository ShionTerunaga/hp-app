import express from "express";
import cors from "cors";
import { appConfig } from "./shared/config";
import { sampleRouter } from "./router/sample";
import { hogeController } from "./controllers/hogeController";

const app = express();
const port = appConfig.port;

app.use(cors());
app.use(express.json());

app.use(appConfig.router.sample.base, sampleRouter);
app.use(appConfig.router.hoge.base, hogeController);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
