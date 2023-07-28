import { config } from "dotenv";
import cors from "cors";
import { router } from "./routes/routes.js";

config({
    path:"./.env",
})

import express from "express";
import connectDB from "./database/connectDB.js";


 
const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use("/",router)
connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is Working Successfully!!!");
})