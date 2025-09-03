import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProgramSection.css';
import { useNavigate } from 'react-router-dom';

const ProgramSection = () => {
  const [programs, setPrograms] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4); // Display 4 cards at a time
  const navigate = useNavigate(); // Initialize navigate hook

    // Function to handle "View Details" button click
    const handleViewDetails = (program) => {
      // Navigate to ProjectDetails page, passing program details via state
      navigate('/program-details', {
          state: {
              image: program.image,
              title: program.title,
              cost: program.cost,
              unit: program.unit
          }
      });
  };

  useEffect(() => {
    // Fetch programs from the backend API
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('/api/programs');
        const sortedPrograms = response.data.sort((a, b) => new Date(b._id) - new Date(a._id));
        setPrograms(sortedPrograms);
      } catch (error) {
        console.error('Error fetching the programs:', error);
      }
    };

    fetchPrograms();
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => {
      window.removeEventListener('resize', updateCardsPerPage);
    };
  }, []);

  const updateCardsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setCardsPerPage(1); // Show 1 card on mobile
    } else {
      setCardsPerPage(4); // Show 4 cards per page on desktop
    }
  };

  const nextSlide = () => {
    if (currentIndex < programs.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="program" className="program-section">
      <h2>State Level Programs</h2>
      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="program-container">
          {programs
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((program) => (
              <div key={program._id} className="program-card">
                <div className="program-image">
                  <img className="pr_img" src={program.image} alt={program.title} />
                  <div className="program-unit">{program.unit}</div>
                </div>
                <div className="program-info">
                  <h3 className="pr_title">{program.title}</h3>
                  <p className="pr_cost">₹{program.cost}</p>
                  <button className="explore-btn" onClick={() => handleViewDetails(program)}>View Details</button>
                </div>
              </div>
            ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProgramSection;
