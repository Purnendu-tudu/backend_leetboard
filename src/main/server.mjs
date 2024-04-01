import express from 'express';
import apiRoute from '../routes/index.mjs';
import cors from 'cors';
import mongoose from "mongoose";
import {config } from "dotenv";
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(apiRoute);


app.get('/', (req, res)=>{
    return res.status(200).send("Hello Hacker");
})



mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("Connected To database");
    app.listen(PORT,()=>{
        console.log(`app is running on port ${PORT}`);
    })

}).catch((error) => {
    console.log(error);
})




