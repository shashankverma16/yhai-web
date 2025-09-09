const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS to allow requests from your React app
app.use(cors({
    origin: 'https://yhai-web.vercel.app', // change this to your React app's address
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// ✅ Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB Atlas using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected successfully');
    // Start server only after DB connection is successful
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
});

// ✅ Define the Program schema and model
const programSchema = new mongoose.Schema({
    title: String,
    unit: String,
    cost: Number,
    image: String
});

const mediaSchema = new mongoose.Schema({
    title: String,
    image: String,
    summary: String,
    content: String
});

const Program = mongoose.model('Program', programSchema);
const Media = mongoose.model('Media', mediaSchema)

// ✅ API Endpoints

// Get all programs
app.get('/api/programs', async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (err) {
        console.error('Error fetching programs:', err.message);
        res.status(500).json({ error: 'Failed to fetch programs' });
    }
});

// Create new program
app.post('/api/programs', async (req, res) => {
    try {
        const { title, unit, cost, image } = req.body;
        const newProgram = new Program({ title, unit, cost, image });
        await newProgram.save();
        res.status(201).json(newProgram);
    } catch (err) {
        console.error('Error creating program:', err.message);
        res.status(500).json({ error: 'Failed to create program' });
    }
});

// Update program
app.put('/api/programs/:id', async (req, res) => {
    try {
        const { title, unit, cost, image } = req.body;
        const updatedProgram = await Program.findByIdAndUpdate(
            req.params.id,
            { title, unit, cost, image },
            { new: true }
        );
        res.json(updatedProgram);
    } catch (err) {
        console.error('Error updating program:', err.message);
        res.status(500).json({ error: 'Failed to update program' });
    }
});

// Delete program
app.delete('/api/programs/:id', async (req, res) => {
    try {
        await Program.findByIdAndDelete(req.params.id);
        res.json({ message: 'Program deleted' });
    } catch (err) {
        console.error('Error deleting program:', err.message);
        res.status(500).json({ error: 'Failed to delete program' });
    }
});

app.get('/api/media', async (req, res) => {
  console.log('GET /api/media called');
    try {
        const articles = await Media.find();
        res.json(articles);
    } catch (err) {
        console.error('Error fetching articles:', err.message);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});
