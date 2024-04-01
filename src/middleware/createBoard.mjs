import { LeetBoard , BoradTrackUser } from "../models/leetBoardModel.mjs";

export const createBoard = async (req, res) =>{
    let leetBoardName = req.params.name;
    let user_names = req.body.user_data;
    let created_by = req.body.created_by;

    try{
        if(!leetBoardName){
            return res.status(201).send({
                status: false,
                message: "Board Name is required"
            })
        }
        
        if(!user_names){
            return res.status(201).send({
                status: false,
                message: "One or More User Name is required"
            })
        }

        if(!created_by){
            return res.status(201).send({
                status: false,
                message: "Created By is Required"
            })
        }

        const newBoard = {
            board_name : leetBoardName,
            board_created_by: created_by,
            board_track_user: user_names.map(userData => ({
                user_name: userData.user_name,
                user_solve_question_count: userData.user_solve_question_count,
                user_profile_link: userData.user_profile_link
            }))
        }

        const board = await LeetBoard.create(newBoard);

        return res.status(200).send(
            {
                status: true,
                board_created: board
            }
        );

    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message})
    }




    
}