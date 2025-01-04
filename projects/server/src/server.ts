import express, { Request, Response } from "express"
import cors from "cors"
import { appConfig } from "./shared/config"

const app = express()
const port = appConfig.port

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
