import express from 'express';
import { Router } from 'express';
import { register, login, logout, getSingleUser } from '../controllers/authController.js';
import { getSingleUserService } from '../services/Auth/loginService.js';

const router = Router();

router.post('/register', register);
router.put('/login', login);
router.post('/logout', logout);
router.get('/getUser/:id', getSingleUser);
export default router;