const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

dotenv.config({path: '../../.env'});
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes.js'));

app.get('/', (req, res) => res.send('🌐 ParkSy Backend Running'));

app.listen(PORT, () => {
    console.log("Server is running at 5000");
});

