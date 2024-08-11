import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const reviewSchema = new Schema({
    hotelId:{
        required: true,
        type: ObjectId
    },
    userId:{
        required: true,
        type: ObjectId
    },
    review:{
        required: true,
        type:String
    }

})

export const ReviewModel = mongoose.models.review ??  mongoose.model("review", reviewSchema)