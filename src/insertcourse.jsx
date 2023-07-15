import React, { useState } from 'react';

const InsertCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [creditHours, setCreditHours] = useState('');
  const [instructor, setInstructor] = useState('');
  const [preRequisite, setPreRequisite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          course_id: courseId,
          title: title,
          credit_hours: creditHours,
          instructor: instructor,
          pre_requisite: preRequisite,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Course Inserted Successfully!');
        console.log(data);
      } else {
        setMessage('An error occurred while inserting the course.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while inserting the course.');
    }
  };

  return (
    <div>
      <h2>Insert Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="creditHours">Credit Hours:</label>
          <input
            type="number"
            id="creditHours"
            value={creditHours}
            onChange={(e) => setCreditHours(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="instructor">Instructor:</label>
          <input
            type="text"
            id="instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preRequisite">Pre-requisite:</label>
          <input
            type="text"
            id="preRequisite"
            value={preRequisite}
            onChange={(e) => setPreRequisite(e.target.value)}
          />
        </div>
        <button type="submit">Insert Course</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default InsertCourse;
