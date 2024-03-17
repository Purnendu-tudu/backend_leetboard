import express from 'express';
import apiRoute from '../routes/index.mjs';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(apiRoute);


app.get('/', (req, res)=>{
    return res.status(200).send("Hello Hacker");
})


app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})

