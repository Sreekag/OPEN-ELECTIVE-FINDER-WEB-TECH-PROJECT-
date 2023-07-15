import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    
    <div className="container-fluid">
     <img src="https://kongu.ac.in/images/header2021.png" alt="Logo" height="60" />
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
      
        <a className="navbar-brand" href="#">
        
          <b>OPEN ELECTIVE COURSES</b>
        </a>
        <ul className="nav navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/index.php">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/departments/eee.php#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://academic.kongu.edu/">Syllabus</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://kongu.ac.in/facilities.php">Facilities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://coe.kongu.edu/">COE</a>
          </li>
          
         
          <li className="nav-item">
            <a className="nav-link" href="https://www.kongu.ac.in/contact.php">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="add-student">Register</a>
          </li>
        
        </ul>
      </nav>
      <br />
      <div className="row">
        <div className="col-lg-6 mt-5 ml-5">
          <h4 style={{ textAlign: 'left', color: 'orange' }}><b>WHY DO WE NEED OPEN ELECTIVE COURSES?</b></h4><br />
          <h6>
            Direct contact with exposed energized conductors or circuit parts. When electrical current travels through our bodies, it can interfere with the normal electrical signals between the brain and our muscles (e.g., heart may stop beating properly, breathing may stop, or muscles may spasm)
            When the electricity arcs (jumps, or "arcs") from an exposed energized conductor or circuit part (e.g., overhead power lines) through a gas (such as air) to a person who is grounded (that would provide an alternative route to the ground for the electrical current)
            Thermal burns from the heat radiated from an electric arc flash. Ultraviolet (UV) and infrared (IR) light emitted from the arc flash can also cause damage to the eyes.
          </h6>
          <br /><br />
          <br /><br />
          <h4 style={{ textAlign: 'left', color: 'orange' ,width:'1000px' }}><b>COURSE OUTCOMES:</b></h4><br />
          <h6 style={{ textAlign: 'left', justifyContent: 'center',width:'1000px' }}>
            Develop innovative, competent, ethical and quality engineers to contribute for technical advancements to meet societal needs
            Provide state-of-the-art facilities for continual improvement in teaching-learning process and research activities
            Enrich the knowledge and skill of the students to cater to the industrial needs and motivate them to become entrepreneurs
          </h6>
          <div className="row" style={{width:'1100px'}}>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXbUvUNR1iKlHziM_oV-ogu0iv98grPMO0A&usqp=CAU" className="card-img-top" alt="Image 1" />
                <div className="card-body">
                  <h5 className="card-title">ELECTRICAL SAFETY</h5>
                  <Link to="/elect" >DETAILS</Link>
                  {/* <p className="card-text">Description of Card 1.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNNk2GcdBI-pFKXUBNnsyRpR9hAfgo2tyVA&usqp=CAU" className="card-img-top" alt="Image 2" />
                <div className="card-body">
                  <h5 className="card-title">REMOTE SENSING</h5>
                  <Link to="/remi" >DETAILS</Link>
                </div>
                </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbJQQ8q3eQPVmDDNz7Bpt9ghW08fRdOws1A&usqp=CAU" className="card-img-top" alt="Image 3" />
                <div className="card-body">
                  <h5 className="card-title">AUTOMOTIVE ENGINEERING</h5>
                  <Link to="/auto" >DETAILS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{width:'1100px'}}>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmgCovhsSs2jcn5QJPljBdxE-kawYc86OpQ&usqp=CAU" className="card-img-top" alt="Image 1" />
                <div className="card-body">
                  <h5 className="card-title">WEB TECH</h5>
                  <p className="card-text">DETAILS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQZfjMhPe6MoNeQvGaN8sM5CVjiJi6CAAlw&usqp=CAU" className="card-img-top" alt="Image 2" />
                <div className="card-body">
                  <h5 className="card-title">BUISNESS INTELLIGENCE</h5>
                  <p className="card-text">DETAILS</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRErPprSehaBLFoTJxKGq6pMM2TGlwiKXug&usqp=CAU" className="card-img-top" alt="Image 3" />
                <div className="card-body">
                  <h5 className="card-title">IMAGE PROCESSING</h5>
                  <p className="card-text">DETAILS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <img src="https://images.shiksha.com/mediadata/images/1520420083phpyKP3vR.jpeg" width="470px" height="400px" alt="Remote Sensing" />
        </div>
        <br></br>
        <br></br>
      
        
        <div className="col-lg-4 mt-5 text-center" style={{ width: '1000px' ,height:'40px'}}>
        <hr style={{width:'1100px',color:'black'}}></hr>
  <div style={{ width: '1000px' ,height:'40px'}}>
    <h5 className="card-title">ADDRESS</h5>
    <p className="card-text">Kongu Engineering College,<br />Perundurai, Erode-638060,<br />Tamil Nadu, India.<br />Phone: +91-424-2265546, +91-424-2265596<br />Fax: +91-424-2265558<br />Email: principal@kongu.ac.in</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default Home;
