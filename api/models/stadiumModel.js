import mongoose from "mongoose";

const stadiumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    photos:{
        type: [String],
        required: true
    },
    MatchDescription:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    seats:{
        type: [String]
    },
    cheapestSeat:{
        type: Number,
        required: true
    },
});

export default mongoose.model("Stadium", stadiumSchema)