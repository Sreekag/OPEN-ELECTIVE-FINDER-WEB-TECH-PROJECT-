// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Signup = () => {
//   const [signupData, setSignupData] = useState({
//     name: '',
//     password: '',
//     mail: '',
//     rno: '',
//     department: '',
//     mobile: '',
//     programme: '',
//     regulation: ''
//   });

//   const handleChange = (e) => {
//     setSignupData({
//       ...signupData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:2000/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signupData),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Signup:', data);
//         // Reset the form
//         setSignupData({
//           name: '',
//           password: '',
//           mail: '',
//           rno: '',
//           department: '',
//           mobile: '',
//           programme: '',
//           regulation: ''
//         });
//       } else {
//         console.error('Error inserting signup:', response.status);
//       }
//     } catch (error) {
//       console.error('Error inserting signup:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={signupData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={signupData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Mail:</label>
//           <input
//             type="text"
//             name="mail"
//             value={signupData.mail}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Roll No:</label>
//           <input
//             type="text"
//             name="rno"
//             value={signupData.rno}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Department:</label>
//           <input
//             type="text"
//             name="department"
//             value={signupData.department}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={signupData.mobile}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Programme:</label>
//           <input
//             type="text"
//             name="programme"
//             value={signupData.programme}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Regulation:</label>
//           <input
//             type="text"
//             name="regulation"
//             value={signupData.regulation}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    password: '',
    mail: '',
    rno: '',
    department: '',
    mobile: '',
    programme: '',
    regulation: ''
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Signup:', data);
        // Reset the form
        setSignupData({
          name: '',
          password: '',
          mail: '',
          rno: '',
          department: '',
          mobile: '',
          programme: '',
          regulation: ''
        });
      } else {
        console.error('Error inserting signup:', response.status);
      }
    } catch (error) {
      console.error('Error inserting signup:', error);
    }
  };

  return (
    <div className="container mt-5" style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <h2 className="text-center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME:</label>
          <input
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>PASSWORD:</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>MAIL:</label>
          <input
            type="text"
            name="mail"
            value={signupData.mail}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>ROLL NO:</label>
          <input
            type="text"
            name="rno"
            value={signupData.rno}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>DEPARTMENT:</label>
          <input
            type="text"
            name="department"
            value={signupData.department}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>MOBILE:</label>
          <input
            type="text"
            name="mobile"
            value={signupData.mobile}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>PROGRAM:</label>
          <input
            type="text"
            name="programme"
            value={signupData.programme}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>REGULATION:</label>
          <input
            type="text"
            name="regulation"
            value={signupData.regulation}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">SIGNUP</button>
      </form>
    </div>
  );
};

export default Signup;
