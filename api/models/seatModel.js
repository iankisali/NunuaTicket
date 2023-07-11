import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seatNumber: [{number: Number, unavailableDates: {type: [Date]} }],
}, { timestamps: true }
);

export default mongoose.model("Seat", seatSchema)