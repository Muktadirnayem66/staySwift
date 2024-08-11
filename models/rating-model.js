
import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const ratingSchema = new Schema({
    hotelId:{
        required: true,
        type: ObjectId
    },
    userId:{
        required: true,
        type: ObjectId
    },
    rating:{
        required: true,
        type:Number
    }
})

export const RatingModel  = mongoose.models.rating ?? mongoose.model("rating", ratingSchema)