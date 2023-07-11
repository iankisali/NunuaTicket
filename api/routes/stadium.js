import express, { json } from 'express'
import { createStadium, updateStadium, deleteStadium, getStadium, getStadiums } from '../controllers/stadiumController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/',verifyAdmin, createStadium);

//UPDATE
router.put('/:id',verifyAdmin, updateStadium);

//DELETE
router.delete('/:id',verifyAdmin, deleteStadium);

//GET
router.get('/:id', getStadium);

//GET ALL
router.get('/', getStadiums);

export default router;