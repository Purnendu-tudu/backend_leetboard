
export const createBoard = (req, res) =>{
    let leetBoardName = req.params.name;
    let user_names = req.body.user_list;
    return res.status(200).send(
        {
            "board_name": leetBoardName,
            "board_tracked_user": user_names
        }
    );
}