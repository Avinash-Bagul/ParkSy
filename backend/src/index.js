import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authMiddleware from './middlewares/authMiddleware.js';
import roleMiddleware from './middlewares/roleMiddleware.js';
import SpacesRoutes from './routes/SpacesRoutes.js'
import BookingRoutes from './routes/BookingRoutes.js';
import AdminRoutes from './routes/AdminRoutes.js';

// path: "../.env"
dotenv.config({ path: "../.env" });
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5174", 
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


// Routes
app.use('/api/auth', authRoutes);
app.use("/api/spaces", SpacesRoutes);
app.use('/api/booking', BookingRoutes);
app.use('/api/admin', AdminRoutes);

app.get('/', (req, res) => res.send('🌐 ParkSy Backend Running'));

app.listen(PORT, () => {
    console.log("Server is running at 5000");
});
