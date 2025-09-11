import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authMiddleware from './middlewares/authMiddleware.js';
import roleMiddleware from './middlewares/roleMiddleware.js';
import parkingRoutes from './routes/ParkingRoutes.js'
import BookingRoutes from './routes/BookingRoutes.js';

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

app.get("/protected", authMiddleware, (req,res) => {
  res.json({
    msg: "Protected route access successfully",
    user: req.user
  })
})

app.get("/profile", authMiddleware, (req,res) => {
  res.json({msg: `Hello ${req.user.role}`});  
});




app.get("/users", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ msg: "All users list (admin only)" });
});



// Routes
app.use('/api/auth', authRoutes);

app.use("/api/parking", parkingRoutes);

app.use('/api/booking', BookingRoutes);

app.get('/', (req, res) => res.send('🌐 ParkSy Backend Running'));

app.listen(PORT, () => {
    console.log("Server is running at 5000");
});

