import React, { useState } from 'react';
import './MediaDashboard.css';
import axios from 'axios';

const MediaDashboard = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMedia = {
      title,
      image,
      summary,
      content,
    };

    try {
      // POST request to your backend to add new media
      await axios.post('/api/media/news', newMedia);
      setSuccessMessage('Media added successfully!');
      setTitle('');
      setImage('');
      setSummary('');
      setContent('');
    } catch (error) {
      console.error('Error adding media:', error);
    }
  };

  return (
    <div className="media-dashboard">
      <h2>Add Media</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="media-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows="2"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Media</button>
      </form>
    </div>
  );
};

export default MediaDashboard;
