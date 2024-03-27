import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { express } from "express";


const app=express()

config({path:"./config/config.env"})


app.use(
    cors({
        origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
        methods:["GET","POST","DELETE","PUT"],
        Credential:true,
    })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extends:true}))

export default app()