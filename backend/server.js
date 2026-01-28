import express from "express";
const port = 4000
const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    return res.status(200).json({message:"hello from backend"})
})  

app.listen(port,()=>{
    console.log("server is running")
})