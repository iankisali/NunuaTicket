import express from 'express'
import { createSeat, deleteSeat, getSeat, getSeats, updateSeat } from '../controllers/seatController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/:stadiumid', verifyAdmin, createSeat);

//UPDATE
router.put('/:id', verifyAdmin, updateSeat);

//DELETE
router.delete('/:id/:stadiumid',verifyAdmin, deleteSeat);

//GET
router.get('/:id', getSeat);

//GET ALL
router.get('/', getSeats);

export default router
