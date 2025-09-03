const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Media schema
const MediaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create the Media model
const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;
