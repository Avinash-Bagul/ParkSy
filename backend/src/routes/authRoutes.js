import express from 'express';
import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.put('/login', login);
router.post('/logout', logout);

export default router;