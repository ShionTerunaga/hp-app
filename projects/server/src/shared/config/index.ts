import { config } from "dotenv"

config()

export const appConfig = {
    port: process.env.PORT
}
