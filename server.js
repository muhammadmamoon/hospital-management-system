import app from "./app";

app.listen(process.env.PORT,()=>{
    console.log(`app listninf ${process.env.PORT}`)
})