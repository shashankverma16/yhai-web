import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div id="about" className="about-container"> {/* Add id here */}
      {/* About Section */} <br/>
      <div className="about">
        <div className="about-image">
          <img src="https://via.placeholder.com/400" alt="About Us" />
        </div>
        <div className="about-details">
          <h2>Why you should choose YHA India?</h2>
          <p>
            We are a vibrant community dedicated to connecting like-minded individuals and fostering growth through various programs and events.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking. We are committed to continuing this journey.
            Our mission is to provide the best possible opportunities for learning and networking.
          </p>
        </div>
      </div>

      <div className="historical-figures">
        <div className="figure">
          <h3>1200+</h3>
          <p>Registered Members</p>
        </div>
        <div className="figure">
          <h3>15</h3>
          <p>Hostels in Goa</p>
        </div>
        <div className="figure">
          <h3>300+</h3>
          <p>Participants/Year</p>
        </div>
        <div className="figure">
          <h3>10</h3>
          <p>Programs</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
