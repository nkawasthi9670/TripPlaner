import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config(); 

const app = express();
app.use(cors());


app.use(express.json());

// Use routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,{
   useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" Connected to MongoDB"))
.catch((err) => console.error(" MongoDB connection error:", err));

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});
