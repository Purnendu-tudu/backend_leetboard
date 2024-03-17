import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const boardTrackedUser = mongoose.Schema(
    {
        user_name:{
            type: String,
            require: true,
            unique: true
        },
        user_solve_question_count:{
            type: Number,
            require: true,
        },
        user_profile_link:{
            type: String,
            require: true
        }
    }
);
boardTrackedUser.plugin(mongooseUniqueValidator,{message:'ERROR expected {PATH} must be unique'});
export const BoradTrackUser = mongoose.model('BoradTrackUser', boardTrackedUser);


const leetBoardmodelSchema = mongoose.Schema(
    {
        board_name: {
            type: String,
            require: true
        },
        board_created_by: {
            type: String,
            require: true
        },
        board_track_user: [boardTrackedUser]

    },
    {
        timestamps: true
    }
);
leetBoardmodelSchema.plugin(mongooseUniqueValidator,{message:'ERROR expected {PATH} must be qunique'});
export const LeetBoard = mongoose.model('LeetBoard',leetBoardmodelSchema);