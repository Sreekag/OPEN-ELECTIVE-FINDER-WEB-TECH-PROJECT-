// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LogoutPage = () => {

//   return (
//     <div className="container text-center">
//       <div className="mt-5">
//         <h2 className="mb-4">You've successfully logged out</h2>
//         <p className="lead"> KEC OPEN ELECTIVE COURSE PORTAL</p>
//         <img src="/path/to/logout-image.png" alt="Logout" className="img-fluid mt-4" />
//       </div>
//     </div>
//   );
// };

// export default LogoutPage;


import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoutPage = () => {

  return (
    <div className="container text-center"  style={{width:'450px',background: '#89A2AF', borderRadius: '8px', padding: '20px'}}>
      <div className="mt-5">
        <h2 className="mb-4">You've successfully logged out</h2>
        <p className="lead">KEC OPEN ELECTIVE COURSE PORTAL</p>
        <BiLogOut className="logout-icon" />
      </div>
    </div>
  );
};

export default LogoutPage;
