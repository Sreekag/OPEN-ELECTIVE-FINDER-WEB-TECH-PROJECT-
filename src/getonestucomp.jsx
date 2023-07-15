import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const [studentId, setStudentId] = useState('');

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const getStudentDetails = async () => {
    try {
      const response = await fetch(`http://localhost:2000/api/student/${studentId}`);
      const data = await response.json();
      if (response.ok) {
        setStudent(data);
      } else {
        console.log(data.msg);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getStudentDetails();
  };

  return (
    <div className="container" style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <h2 className="mt-4 mb-3">STUDENT DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">ENTER THE STUDENTID:</label>
          <input
            type="text"
            className="form-control"
            id="studentId"
         
            value={studentId}
            onChange={handleInputChange}
            placeholder="Enter Student ID"
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Details</button>
      </form>
      {student ? (
        <div className="mt-4">
          <table className="table">
            <tbody>
              <tr>
                <th>NAME:</th>
                <td>{student.name}</td>
              </tr>
              <tr>
                <th>STUDENT ID:</th>
                <td>{student.student_id}</td>
              </tr>
              <tr>
                <th>EMAIL:</th>
                <td>{student.mail}</td>
              </tr>
              <tr>
                <th>DEPARTMENT:</th>
                <td>{student.department}</td>
              </tr>
              <tr>
                <th>SEMESTER:</th>
                <td>{student.semester}</td>
              </tr>
              <tr>
                <th>PREFERENCE 1:</th>
                <td>{student.preference_1}</td>
              </tr>
              <tr>
                <th>PREFERENCE 2:</th>
                <td>{student.preference_2}</td>
              </tr>
              <tr>
                <th>PREFERENCE3:</th>
                <td>{student.preference_3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">Enter a student ID and click "Get Details" to retrieve student information.</p>
      )}
    </div>
  );
};

export default StudentDetails;
