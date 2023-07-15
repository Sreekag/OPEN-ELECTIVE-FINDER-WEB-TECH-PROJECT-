import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:2000/api/course/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Course Deleted Successfully!');
        console.log(data);
      } else if (response.status === 404) {
        setMessage('Course Does Not Exist!');
      } else {
        setMessage('An error occurred while deleting the course.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while deleting the course.');
    }
  };

  return (
    <div className="container" style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}} >
      <h2>Delete Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseId" className="form-label">
            COURSE ID:
          </label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">DELETE COURSE</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default DeleteCourse;
