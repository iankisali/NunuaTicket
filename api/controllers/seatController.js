import Seat from '../models/seatModel.js'
import Stadium from '../models/stadiumModel.js'
import { createError } from '../utils/error.js'

export const createSeat = async (req, res, next) => {
     const stadiumId = req.params.stadiumid;
     const newSeat = new Seat(req.body)

     try {
        const savedSeat = await newSeat.save()

        try {
            await Stadium.findByIdAndUpdate(stadiumId, {$push: {seats: savedSeat._id },
            });
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedSeat);
     } catch (error) {
        next(error)
     }
};

export const updateSeat = async (req, res, next) => {
    try{
        const updateSeat = await Seat.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true })
        res.status(200).json(updateSeat)
    } catch (error) {
        next(error)
    }
};

export const deleteSeat = async (req, res, next) => {
    const stadiumId = req.params.stadiumid;
    try{
        await Seat.findByIdAndDelete(req.params.id);
            try {
                await Stadium.findByIdAndUpdate(stadiumId, {$pull: {seats: req.params.id },
                });
            } catch (error) {
                next(error)
            }
        res.status(200).json('Seat has been deleted')
    } catch (error) {
        next(error)
    }
};

export const getSeat = async (req, res, next) => {
    try{
        const seat = await Seat.findById(req.params.id);
        res.status(200).json(seat)
    } catch (error) {
        next(error)
    }
};

export const getSeats = async (req, res, next) => {
    try{
        const allSeats = await Seat.find()
        res.status(200).json(allSeats)
    } catch (error) {
        next(error)
    }
};
