import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetAllInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/instructor');
      if (response.ok) {
        const data = await response.json();
        setInstructors(data);
      } else {
        console.error('Error fetching instructors:', response.status);
      }
    } catch (error) {
      console.error('Error fetching instructors:', error);
    }
  };

  return (
    <div className="container" style={{width:'570px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <h1 className="mb-4">INSTRUCTORS</h1>
      {Array.isArray(instructors) && instructors.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>INSTRUCTOR ID</th>
              <th>INSTRUCTOR NAME</th>
              <th>CONTACT NUMBER</th>
              <th>COURSE ID</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor._id}>
                <td>{instructor.instructor_id}</td>
                <td>{instructor.instructor_name}</td>
                <td>{instructor.contact_no}</td>
                <td>{instructor.course_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No instructors found</p>
      )}
    </div>
  );
};

export default GetAllInstructors;
