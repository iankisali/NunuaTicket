import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import stadiumRoute from './routes/stadium.js'
import seatRoute from './routes/seat.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

//connecting to database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB')
    } catch (error) {
        throw error;
    }
};

//middlewares
app.use(express.json())
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/stadium', stadiumRoute);
app.use('/api/seat', seatRoute);

app.use((err,req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({success: false,
    status: errorStatus,
message: errorMessage,
stack: err.stack})
})

//connecting to backend
app.listen(process.env.PORT, () => {
    connect()
    console.log(`Listening for requests on http://localhost:${process.env.PORT}`)
});
