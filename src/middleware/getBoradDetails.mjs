import { LeetBoard } from "../models/leetBoardModel.mjs";


export const getBoardDetails = async (req, res) => {
    let boardId = req.body.boardId;
    
    try{
        if(!boardId){
            return res.status(404).send({
                status: false,
                message: "Please Provide a board Id"
            })
        }

        const boardResult = await LeetBoard.findById({_id: boardId});
        if(!boardResult){
            return res.status(404).send({
                status: false,
                message: "Sorry No Such Board Check your Board id"
            })
        }

        return res.status(200).send({
            status: true,
            message: "Succesfully retrive the board data",
            board_data: boardResult
        })

    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }


}