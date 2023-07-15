// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const UpdateStudent = () => {
//   const [student_id, setStudentId] = useState('');
//   const [preference1, setPreference1] = useState('');
//   const [preference2, setPreference2] = useState('');
//   const [preference3, setPreference3] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:2000/api/student/${student_id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           preference_1: preference1,
//           preference_2: preference2,
//           preference_3: preference3,
//         }),
//       });

//       if (response.ok) {
     
       
//         setMessage('Student Updated Successfully!');
//       } else if (response.status === 404) {
//         setMessage('Student Does Not Exist!');
//       } else {
//         setMessage('An error occurred while updating the student.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred while updating the student.');
//     }
//   };

//   return (
//     <div>
//       <h2>Update Student</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="student_id">Student ID:</label>
//           <input
//             type="text"
//             id="student_id"
//             value={student_id}
//             onChange={(e) => setStudentId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="preference1">Preference 1:</label>
//           <input
//             type="text"
//             id="preference1"
//             value={preference1}
//             onChange={(e) => setPreference1(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="preference2">Preference 2:</label>
//           <input
//             type="text"
//             id="preference2"
//             value={preference2}
//             onChange={(e) => setPreference2(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="preference3">Preference 3:</label>
//           <input
//             type="text"
//             id="preference3"
//             value={preference3}
//             onChange={(e) => setPreference3(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Update Student</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UpdateStudent;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [preference1, setPreference1] = useState('');
  const [preference2, setPreference2] = useState('');
  const [preference3, setPreference3] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:2000/api/student/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preference_1: preference1,
          preference_2: preference2,
          preference_3: preference3,
        }),
      });

      if (response.ok) {
        setMessage('Student Updated Successfully!');
      } else if (response.status === 404) {
        setMessage('Student Does Not Exist!');
      } else {
        setMessage('An error occurred while updating the student.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while updating the student.');
    }
  };

  return (
    <div className="container mt-4"  >
      <div className="row justify-content-center" >
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
              <h2 className="card-title text-center mb-4">CHANGE THE PREFERENCES</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="studentId">STUDENT ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preference1">PREFERENCE 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="preference1"
                    value={preference1}
                    onChange={(e) => setPreference1(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preference2">PREFERENCE 2:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="preference2"
                    value={preference2}
                    onChange={(e) => setPreference2(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preference3">PREFERENCE 3:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="preference3"
                    value={preference3}
                    onChange={(e) => setPreference3(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">CHANGE</button>
              </form>
              {message && <p className="text-center mt-3">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
