import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({path: '../../.env'});
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));


// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('🌐 ParkSy Backend Running'));

app.listen(PORT, () => {
    console.log("Server is running at 5000");
});

