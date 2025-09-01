import express, { Router } from 'express';
import { createParkingSpot, getParkingSpot, updateParkingSpot, deleteParkingSpot } from '../controllers/ParkingSpaces.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post("/", authMiddleware, createParkingSpot);       // Create new parking space
router.get("/", getParkingSpot);                       // Get all available spaces
router.put("/:id", authMiddleware, updateParkingSpot);     // Update space
router.delete("/:id", authMiddleware, deleteParkingSpot);  // Delete space

export default router;