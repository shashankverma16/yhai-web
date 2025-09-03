import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ProgramForm.css';

const ProgramForm = () => {
  const [programs, setPrograms] = useState([]);
  const [programData, setProgramData] = useState({
    title: '',
    unit: '',
    cost: '',
    image: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [currentProgramId, setCurrentProgramId] = useState(null);
  
  // Use useRef for the file input field and the form
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  // Fetch programs and sort by latest added
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/programs');
        const sortedPrograms = response.data.sort((a, b) => new Date(b._id) - new Date(a._id)); // Sort by latest first
        setPrograms(sortedPrograms);
      } catch (error) {
        console.error('Error fetching programs', error);
      }
    };

    fetchPrograms();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgramData({ ...programData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProgramData({ ...programData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Submit or Update program
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update program
        const response = await axios.put(`/api/programs/${currentProgramId}`, programData);
        setPrograms(programs.map(program => program._id === currentProgramId ? response.data : program));
        setEditMode(false);
        setCurrentProgramId(null);
      } else {
        // Add new program
        const response = await axios.post('/api/programs', programData);
        setPrograms([response.data, ...programs]); // Add the new program to the beginning of the list
      }

      // Reset form fields and image input
      setProgramData({ title: '', unit: '', cost: '', image: '' });
      fileInputRef.current.value = ''; // Reset file input field
    } catch (error) {
      console.error('Error adding/updating program', error);
    }
  };

  // Handle program deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/programs/${id}`);
      setPrograms(programs.filter((program) => program._id !== id));
    } catch (error) {
      console.error('Error deleting program', error);
    }
  };

  // Handle program edit
  const handleEdit = (program) => {
    setProgramData({
      title: program.title,
      unit: program.unit,
      cost: program.cost,
      image: program.image,
    });
    setEditMode(true);
    setCurrentProgramId(program._id);

    // Scroll to the form after clicking edit
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="program-form-container">
      <br></br>
      <br></br>
      <br></br>
      <h2>{editMode ? 'Update Program' : 'Add New Program'}</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="program-form">
        <div className="form-row">
          <input
            type="text"
            name="title"
            placeholder="Program Title"
            value={programData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="unit"
            placeholder="Unit"
            value={programData.unit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            name="cost"
            placeholder="Cost"
            value={programData.cost}
            onChange={handleChange}
            required
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            ref={fileInputRef} // Add ref to the file input
            required 
          />
        </div>
        <button type="submit" className="submit-btn">
          {editMode ? 'Update Program' : 'Add Program'}
        </button>
      </form>

      <h2>Program List</h2>
      <div className="program-list">
        {programs.map((program) => (
          <div key={program._id} className="program-card">
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <p> {program.unit}</p>
            <p>Cost: ₹{program.cost}</p>
            <button onClick={() => handleEdit(program)} className="edit-btn">Edit</button> &nbsp;
            <button onClick={() => handleDelete(program._id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramForm;
