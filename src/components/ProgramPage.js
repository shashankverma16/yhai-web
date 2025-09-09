import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProgramPage.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';



function ProgramPage() {
    const [programs, setPrograms] = useState([]);
    const navigate = useNavigate(); // Initialize navigate hook

    // useEffect(() => {
    //     const fetchPrograms = async () => {
    //         try {
    //             const response = await axios.get('https://localhost:5000/api/programs');
    //             const sortedPrograms = response.data.sort((a, b) => new Date(b._id) - new Date(a._id));
    //             setPrograms(sortedPrograms);
    //         } catch (error) {
    //             console.error('Error fetching programs', error);
    //         }
    //     };
    
    //     fetchPrograms();
    // }, []);

    useEffect(() => {
    const fetchPrograms = async () => {
        try {
            // const response = await axios.get('https://yhai-web.vercel.app//api/programs');
            const response = await axios.get(`${API_URL}/api/programs`);
            console.log('Fetched data:', response.data); // Add this line to inspect the response
            if (Array.isArray(response.data)) {
                const sortedPrograms = response.data.sort((a, b) => new Date(b._id) - new Date(a._id));
                setPrograms(sortedPrograms);
            } else {
                console.error('Data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching the programs:', error);
        }
    };

    fetchPrograms();
}, []);


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

    return (
        <div className="program-container">
            {programs.map((program) => (
                <div key={program._id} className="program-card">
                    <div className="program-image">
                        <img className="pr_img" src={program.image} alt={program.title} />
                        <div className="program-unit">{program.unit}</div>
                    </div>
                    <div className="program-info">
                        <h3 className="pr_title">{program.title}</h3>
                        <p className="pr_cost">₹{program.cost}</p>
                        <button className="explore-btn" onClick={() => handleViewDetails(program)}>
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProgramPage;
