import { config } from "dotenv";

config();

export const appConfig = {
    port: process.env.PORT || 6060,
    router: {
        sample: {
            base: process.env.SAMPLE_ROUTE || "/sample",
            hello: process.env.SAMPLE_HELLO || "/hello"
        },
        hoge: {
            base: process.env.HOGE_ROUTE || "/hoge"
        }
    }
};
