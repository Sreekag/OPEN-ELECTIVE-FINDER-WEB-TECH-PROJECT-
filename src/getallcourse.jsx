import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/course');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Error fetching courses:', response.status);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div className="container" style={{background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">Course List</h1>
        </div>
        <div className="card-body">
          {Array.isArray(courses) ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Course ID</th>
                  <th>Title</th>
                  <th>Credit Hours</th>
                  <th>Instructor</th>
                  <th>Pre-requisite</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.course_id}>
                    <td>{course.course_id}</td>
                    <td>{course.title}</td>
                    <td>{course.credit_hours}</td>
                    <td>{course.instructor}</td>
                    <td>{course.pre_requisite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
