import { Router } from "express";
import {leetcode} from "../middleware/leetCode.mjs";
import { createBoard } from "../middleware/createBoard.mjs";

const route = Router();

route.get('/hello',(req, res)=>{
    return res.status(200).send("this is from the api route");
});

route.get('/leetProfile/:id', leetcode);

route.post('/create/:name', createBoard);

export default route;