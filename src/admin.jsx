



import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  return (
    <div className="container-fluid" style={{ background: 'black', color: '#f8f8f8' }}>
      <nav className="navbar navbar-expand-sm navbar-dark" style={{ background: '#333', color: '#fff',width:'1000px' }}> 
      <a className="navbar-brand" href="#">
         <b>ADMIN</b>
        </a>
       <ul className="nav navbar-nav justify-content-end">
        <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/index.php">Home</a>
         </li>
          <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/departments/eee.php#">About</a>
          </li>
          <li className="nav-item">
           <a className="nav-link" href="https://academic.kongu.edu/">KEC</a>
         </li>
          <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/facilities.php">Facilities</a>
           </li>
          <li className="nav-item">
            <a className="nav-link" href="/log">LOGOUT</a>
          </li>
         
          
          
         
      </ul>
      </nav>
     
      <div className="row">
        <div className="col-lg-6 mt-5 ml-5">
         
          <table className='table' style={{border:'none'}}>
            <tbody>
              <tr>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>STUDENT DETAILS</Link>
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/add-student" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>ADD STUDENTS</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/update" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>CHANGE PREFERENCES</Link>
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/id" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>STUDENT ID</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/crg" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>COURSE DETAILS</Link>
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/cr" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>ADD MORE COURSES</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/insg" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>FACULTIES</Link>
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/ins" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>ADD FACULTY</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/del" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>DELETE COURSE</Link>
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
                    <Link to="/cr1" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>COURSE DETAIL</Link>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
              <Link to ="/home" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>GO TO HOMEPAGE</Link>
            </button>
                </td>
                <td>
                <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
              <Link to="/home" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>LOGOUT</Link>
            </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br /><br />
          
          
        </div>
        <br></br>
        <br></br>
        <div className="col-lg-6" style={{ textAlign: 'center', marginTop: '110px' }}>
          <img src="https://static.vecteezy.com/system/resources/previews/020/067/861/original/kec-abstract-technology-circle-setting-logo-design-on-black-background-kec-creative-initials-letter-logo-vector.jpg" width="470px" height="550px" alt="Remote Sensing" />
        </div>
        <div className="col">
        <div className="col-lg-12">
          <div style={{ textAlign: 'center', marginTop: '0px' }}>
            
            <h3>IMPLEMENTED & MAINTAINED BY</h3>
            <p>KEC AI DEPARTMENT</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Admin;
