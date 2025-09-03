const express = require('express');
const router = express.Router();
const Media = require('../model/Media'); // Ensure the correct path

// POST route to add media content
router.post('/news', async (req, res) => {
  const { title, image, summary, content } = req.body;

  try {
    const newMedia = new Media({ 
      title,
      image,
      summary,
      content,
    });
    await newMedia.save();
    res.status(201).json({ message: 'Media added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding media.', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    // const mediaItems = await Media.find();
    const mediaItems = await Media.find().sort({ createdAt: -1 });
    console.log("Media items", mediaItems)
    res.json(mediaItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching media.', error: error.message });
  }
});


module.exports = router;
