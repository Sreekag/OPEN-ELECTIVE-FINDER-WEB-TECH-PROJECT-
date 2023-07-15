// import React, { useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const InsertCourse = () => {
//   const [courseId, setCourseId] = useState('');
//   const [title, setTitle] = useState('');
//   const [creditHours, setCreditHours] = useState('');
//   const [instructor, setInstructor] = useState('');
//   const [preRequisite, setPreRequisite] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:2000/api/course', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           course_id: courseId,
//           title: title,
//           credit_hours: creditHours,
//           instructor: instructor,
//           pre_requisite: preRequisite,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Course inserted:', data);
//         // Reset the form fields
//         setCourseId('');
//         setTitle('');
//         setCreditHours('');
//         setInstructor('');
//         setPreRequisite('');
//       } else {
//         const errorData = await response.json();
//         console.log('Error:', errorData);
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Insert Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="courseId">Course ID:</label>
//           <input type="text" id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="creditHours">Credit Hours:</label>
//           <input type="text" id="creditHours" value={creditHours} onChange={(e) => setCreditHours(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="instructor">Instructor:</label>
//           <input type="text" id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="preRequisite">Pre-requisite:</label>
//           <input type="text" id="preRequisite" value={preRequisite} onChange={(e) => setPreRequisite(e.target.value)} />
//         </div>
//         <button type="submit">Insert Course</button>
//       </form>
//     </div>
//   );
// };

// export default InsertCourse;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InsertCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [creditHours, setCreditHours] = useState('');
  const [instructor, setInstructor] = useState('');
  const [preRequisite, setPreRequisite] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        console.log('Course inserted:', data);
        // Reset the form fields
        setCourseId('');
        setTitle('');
        setCreditHours('');
        setInstructor('');
        setPreRequisite('');
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container" style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <h2 className="my-4">INSERT COURSE</h2>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>COURSE ID:</td>
              <td>
                <input type="text" className="form-control" value={courseId} style={{background: '#C0C0C0'}} onChange={(e) => setCourseId(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>TITLE:</td>
              <td>
                <input type="text" className="form-control" value={title}  style={{background: '#C0C0C0'}} onChange={(e) => setTitle(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>CREDIT HOURS:</td>
              <td>
                <input type="text" className="form-control" value={creditHours}  style={{background: '#C0C0C0'}} onChange={(e) => setCreditHours(e.target.value)} />
              </td>
            </tr>
            <tr> 
              <td>INSTRUCTOR:</td>
              <td>
                <input type="text" className="form-control" value={instructor}  style={{background: '#C0C0C0'}} onChange={(e) => setInstructor(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>PRE-REQUISITE:</td>
              <td>
                <input type="text" className="form-control" value={preRequisite} style={{background: '#C0C0C0'}}  onChange={(e) => setPreRequisite(e.target.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">INSERT COURSE</button>
      </form>
    </div>
  );
};

export default InsertCourse;
