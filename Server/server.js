const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const mediaRoutes = require('../src/routes/mediaRoutes'); // Ensure path is correct

// Middleware
// Use media routes

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/media', mediaRoutes);
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/yhai-db', {
mongoose.connect(
  'mongodb+srv://codeovercoffee25:dBc23FQaMEX4gCS1@cluster0.jqkytab.mongodb.net/yhai-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));




// Define Program Schema & Model
const programSchema = new mongoose.Schema({
  title: String,
  unit: String,
  cost: Number,
  image: String,
});

const Program = mongoose.model('Program', programSchema);

// API to get all programs
app.get('/api/programs', async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
});

// API to create a new program
app.post('/api/programs', async (req, res) => {
  try {
    const { title, unit, cost, image } = req.body;
    const newProgram = new Program({ title, unit, cost, image });
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create program' });
  }
});

// API to update a program
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
    res.status(500).json({ error: 'Failed to update program' });
  }
});

// API to delete a program
app.delete('/api/programs/:id', async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.json({ message: 'Program deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete program' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
