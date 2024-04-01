import { Router } from "express";
import {leetcode} from "../middleware/leetCode.mjs";
import { createBoard } from "../middleware/createBoard.mjs";
import { getBoardDetails } from "../middleware/getBoradDetails.mjs";
import { deleteABoard } from "../middleware/deleteBoard.mjs";

const route = Router();

route.get('/hello',(req, res)=>{
    return res.status(200).send("this is from the api route");
});

route.get('/leetProfile/:id', leetcode);
route.post('/leetBoard',getBoardDetails);
route.delete('/destroyBoard',deleteABoard);

route.post('/create/:name', createBoard);

export default route;