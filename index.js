import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongo');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log('Disconnected mongodb');
})

mongoose.connection.on("connected", () => {
    console.log('Connected mongodb');
})

app.listen(8080, () => {
    connect();
    console.log("Connected to backend.")
});
