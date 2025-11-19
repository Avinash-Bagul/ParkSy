import express, { Router } from 'express';
import { createSpace, getSpace, updateSpace, deleteSpace, confirmPayment } from '../controllers/Spaces.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.get("/", getSpace);                       
router.post("/create", authMiddleware, createSpace);       
router.put("/update/:id", authMiddleware, updateSpace);     
router.delete("/delete/:id", authMiddleware, deleteSpace);  
router.put('/:id/payment/confirm_payment', authMiddleware, confirmPayment);

export default router;