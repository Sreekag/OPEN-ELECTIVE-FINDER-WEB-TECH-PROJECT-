import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InsertInstructor = () => {
  const [instructorData, setInstructorData] = useState({
    instructor_id: '',
    instructor_name: '',
    contact_no: '',
    course_id: '',
  });

  const handleChange = (e) => {
    setInstructorData({
      ...instructorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:2000/api/instructor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(instructorData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Instructor inserted:', data);
        // Reset the form
        setInstructorData({
          instructor_id: '',
          instructor_name: '',
          contact_no: '',
          course_id: '',
        });
      } else {
        console.error('Error inserting instructor:', response.status);
      }
    } catch (error) {
      console.error('Error inserting instructor:', error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px' , background: '#89A2AF', borderRadius: '8px', padding: '20px',color: '#DCDCDC',fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>
      <h2>INSERT INSTRUCTOR</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="instructor_id" className="form-label">
            INSTRUCTOR ID:
          </label>
          <input
            type="text"
            id="instructor_id"
            className="form-control"
            name="instructor_id"
            value={instructorData.instructor_id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructor_name" className="form-label">
            INSTRUCTOR NAME:
          </label>
          <input
            type="text"
            id="instructor_name"
            className="form-control"
            name="instructor_name"
            value={instructorData.instructor_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_no" className="form-label">
            CONTACT NUMBER:
          </label>
          <input
            type="text"
            id="contact_no"
            className="form-control"
            name="contact_no"
            value={instructorData.contact_no}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course_id" className="form-label">
            COURSE ID:
          </label>
          <input
            type="text"
            id="course_id"
            className="form-control"
            name="course_id"
            value={instructorData.course_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">INSERT</button>
      </form>
    </div>
  );
};

export default InsertInstructor;
