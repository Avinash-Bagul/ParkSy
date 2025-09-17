import express, { Router } from 'express';
import { createSpace, getSpace, updateSpace, deleteSpace } from '../controllers/Spaces.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post("/", authMiddleware, createSpace);       // Create new parking space
router.get("/", getSpace);                       // Get all available spaces
router.put("/:id", authMiddleware, updateSpace);     // Update space
router.delete("/:id", authMiddleware, deleteSpace);  // Delete space

export default router;