

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentFormComponent = ({ addStudent }) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [email, setEmail] = useState('');
//   const [department, setDepartment] = useState('');
//   const [semester, setSemester] = useState('');
//   const [preference1, setPreference1] = useState('');
//   const [preference2, setPreference2] = useState('');
//   const [preference3, setPreference3] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newStudent = {
//       name,
//       student_id: studentId,
//       mail: email,
//       department,
//       semester,
//       preference_1: preference1,
//       preference_2: preference2,
//       preference_3: preference3,
//     };

//     try {
//       const response = await fetch('http://localhost:2000/api/student', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newStudent),
//       });
//       navigate('/home');
//       const data = await response.json();
//       addStudent(data);
    
//       setName('');
//       setStudentId('');
//       setEmail('');
//       setDepartment('');
//       setSemester('');
//       setPreference1('');
//       setPreference2('');
//       setPreference3('');

     
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//         integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//         crossorigin="anonymous"
//       ></link>
//       <div
//         className="container"
//         style={{
//           width: '600px',
//           background: '#89A2AF',
//           borderRadius: '8px',
//           padding: '20px',
//         }}
//       >
//         <div className="text-center">
//           <h2
//             style={{
//               fontFamily: 'Montserrat, sans-serif',
//               fontWeight: 'bold',
//               fontSize: '24px',
//               color: '#DCDCDC',
//             }}
//           >
//             REGISTER FOR THE OPEN ELECTIVE COURSES
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label
//                   htmlFor="name"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   NAME:
//                 </label>
//                 <br></br>
//                 <input
//                   type="text"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                     color: '#DCDCDC',
//                   }}
//                   id="name"
//                   className="form-control"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="studentId"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   ROLLNO:
//                 </label>
//                 <input
//                   type="text"
//                   id="studentId"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={studentId}
//                   onChange={(e) => setStudentId(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="email"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   EMAIL
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="department"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   DEPARTMENT
//                 </label>
//                 <select
//                   id="department"
//                   style={{ background: '#C0C0C0' }}
//                   className="form-control"
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                 >
//                   <option value="">SELECT DEPARTMENT</option>
//                   <option value="AI">AI</option>
//                   <option value="ML">ML</option>
//                   <option value="DS">DS</option>
//                   <option value="CSE">CSE</option>
//                 </select>
//               </div>
//               <br></br>
//             </div>
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label
//                   htmlFor="semester"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Semester:
//                 </label>
//                 <input
//                   type="text"
//                   id="semester"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={semester}
//                   onChange={(e) => setSemester(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="preference1"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   PREFERENCE 1:
//                 </label>
//                 <input
//                   type="text"
//                   id="preference1"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={preference1}
//                   onChange={(e) => setPreference1(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="preference2"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   PREFERENCE2:
//                 </label>
//                 <input
//                   type="text"
//                   id="preference2"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={preference2}
//                   onChange={(e) => setPreference2(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <div className="form-group">
//                 <label
//                   htmlFor="preference3"
//                   style={{
//                     color: '#DCDCDC',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   PREFERENCE 3:
//                 </label>
//                 <input
//                   type="text"
//                   id="preference3"
//                   style={{
//                     background: '#C0C0C0',
//                     fontFamily: 'Arial, sans-serif',
//                     fontWeight: 'bold',
//                     fontSize: '24px',
//                   }}
//                   className="form-control"
//                   value={preference3}
//                   onChange={(e) => setPreference3(e.target.value)}
//                 />
//               </div>
//               <br></br>
//               <br></br>
//               <div className="d-flex justify-content-center">
//                 <div className="form-group">
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     style={{ width: '100px' }}
//                   >
//                     REGISTER
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StudentFormComponent;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentFormComponent = ({ addStudent }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [studentId, setStudentId] = useState('');
  const [studentIdError, setStudentIdError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [department, setDepartment] = useState('');
  const [departmentError, setDepartmentError] = useState('');

  const [semester, setSemester] = useState('');
  const [semesterError, setSemesterError] = useState('');

  const [preference1, setPreference1] = useState('');
  const [preference1Error, setPreference1Error] = useState('');

  const [preference2, setPreference2] = useState('');
  const [preference2Error, setPreference2Error] = useState('');

  const [preference3, setPreference3] = useState('');
  const [preference3Error, setPreference3Error] = useState('');

  const validateForm = () => {
    let valid = true;

    if (name.trim() === '') {
      setNameError('Please enter your name');
      valid = false;
    } else {
      setNameError('');
    }

    if (studentId.trim() === '') {
      setStudentIdError('Please enter your student ID');
      valid = false;
    } else {
      setStudentIdError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (department === '') {
      setDepartmentError('Please select your department');
      valid = false;
    } else {
      setDepartmentError('');
    }

    if (semester.trim() === '') {
      setSemesterError('Please enter your semester');
      valid = false;
    } else {
      setSemesterError('');
    }

    if (preference1.trim() === '') {
      setPreference1Error('Please enter your preference 1');
      valid = false;
    } else {
      setPreference1Error('');
    }

    if (preference2.trim() === '') {
      setPreference2Error('Please enter your preference 2');
      valid = false;
    } else {
      setPreference2Error('');
    }

    if (preference3.trim() === '') {
      setPreference3Error('Please enter your preference 3');
      valid = false;
    } else {
      setPreference3Error('');
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newStudent = {
        name,
        student_id: studentId,
        mail: email,
        department,
        semester,
        preference_1: preference1,
        preference_2: preference2,
        preference_3: preference3,
      };

      try {
        const response = await fetch('http://localhost:2000/api/student', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStudent),
        });
        navigate('/home');
        const data = await response.json();
        addStudent(data);

        setName('');
        setStudentId('');
        setEmail('');
        setDepartment('');
        setSemester('');
        setPreference1('');
        setPreference2('');
        setPreference3('');
      } catch (error){
        console.log('Error:', error);
      }
    }
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      ></link>
      <div
        className="container"
        style={{
          width: '600px',
          background: '#89A2AF',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <div className="text-center">
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bold',
              fontSize: '24px',
              color: '#DCDCDC',
            }}
          >
            REGISTER FOR THE OPEN ELECTIVE COURSES
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                   
                  }}
                >
                  NAME:
                </label>
                <br></br>
                <input
                  type="text"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: '#DCDCDC',
                  }}
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="text-danger">{nameError}</p>}
              </div>
              <br></br>
              <div className="form-group">
                <label
                  htmlFor="studentId"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                    
                  }}
                >
                  ROLLNO:
                </label>
                <input
                  type="text"
                  id="studentId"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                  
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
                {studentIdError && (
                  <p className="text-danger">{studentIdError}</p>
                )}
              </div>
              <br></br>
              <div className="form-group">
                <label
                  htmlFor="email"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                   
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                  
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>
              <br></br>
              <div className="form-group">
                <

label
                  htmlFor="department"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                
                  }}
                >
                  DEPARTMENT
                </label>
                <select
                  id="department"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                  
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="" disabled>
                    Select department
                  </option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="MECH">MECH</option>
                  <option value="CIVIL">CIVIL</option>
                </select>
                {departmentError && (
                  <p className="text-danger">{departmentError}</p>
                )}
              </div>
              <br></br>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label
                  htmlFor="semester"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                  
                  }}
                >
                  SEMESTER:
                </label>
                <input
                  type="text"
                  id="semester"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                   
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
                {semesterError && (
                  <p className="text-danger">{semesterError}</p>
                )}
              </div>
              <br></br>
              <div className="form-group">
                <label
                  htmlFor="preference1"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                   
                  }}
                >
                  PREFERENCE 1:
                </label>
                <input
                  type="text"
                  id="preference1"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                   
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={preference1}
                  onChange={(e) => setPreference1(e.target.value)}
                />
                {preference1Error && (
                  <p className="text-danger">{preference1Error}</p>
                )}
              </div>
              <br></br>
              <div className="form-group">
                <label
                  htmlFor="preference2"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                 
                  }}
                >
                  PREFERENCE 2:
                </label>
                <input
                  type="text"
                  id="preference2"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                   
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={preference2}
                  onChange={(e) => setPreference2(e.target.value)}
                />
                {preference2Error && (
                  <p className="text-danger">{preference2Error}</p>
                )}
              </div>
              <br></br>
              <div className="form-group">
                <label
                  htmlFor="pre

ference3"
                  style={{
                    color: '#DCDCDC',
                    fontFamily: 'Arial, sans-serif',
                 
                  }}
                >
                  PREFERENCE 3:
                </label>
                <input
                  type="text"
                  id="preference3"
                  style={{
                    background: '#C0C0C0',
                    fontFamily: 'Arial, sans-serif',
                  
                    fontSize: '10px',
                  }}
                  className="form-control"
                  value={preference3}
                  onChange={(e) => setPreference3(e.target.value)}
                />
                {preference3Error && (
                  <p className="text-danger">{preference3Error}</p>
                )}
              </div>
              <br></br>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: '#000000',
                fontFamily: 'Arial, sans-serif',
             
                fontSize: '10px',
              }}
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentFormComponent;
