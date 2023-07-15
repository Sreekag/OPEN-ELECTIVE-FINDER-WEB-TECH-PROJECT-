import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [course, setCourse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:2000/api/course/${courseId}`);
      const data = await response.json();

      if (response.ok) {
        setCourse(data);
      } else {
        console.log(data.msg);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container" style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <h2 className="my-4">GET COURSE</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseId" className="form-label">Course ID:</label>
          <input
            type="text"
            className="form-control"
            id="courseId"
            style={{background:'#C0C0C0'}}
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder="Enter Course ID"
          />
        </div>
        <button type="submit" className="btn btn-primary">GET COURSE</button>
      </form>
      {course ? (
        <div className="mt-4">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>COURSE ID</th>
                <td>{course.course_id}</td>
              </tr>
              <tr>
                <th>TITLE</th>
                <td>{course.title}</td>
              </tr>
              <tr>
                <th>CREDIT HOURS</th>
                <td>{course.credit_hours}</td>
              </tr>
              <tr>
                <th>INSTRUCTOR</th>
                <td>{course.instructor}</td>
              </tr>
              <tr>
                <th>PRE-REQUISITE</th>
                <td>{course.pre_requisite}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">Enter a course ID and click "Get Course" to retrieve course information.</p>
      )}
    </div>
  );
};

export default GetCourse;
