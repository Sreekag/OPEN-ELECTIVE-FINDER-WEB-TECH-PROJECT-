import React from 'react';

const Elect = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <b>ELECTRICAL SAFETY</b>
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
         
          <li className="nav-item " style={{ borderRadius: '10px' }}>
          <a className="nav-link" href="/insg"> FACULTIES</a>
          </li>
        </ul>
      </nav>
      <br /><br />
      <div className="row">
        <div className="col-lg-6 mt-5 ml-5">
          <h4 style={{ textAlign: 'left', color: 'orange' }}><b>WHY DO WE NEED ELECTRICAL SAFETY?</b></h4><br />
          <h6>
            Direct contact with exposed energized conductors or circuit parts. When electrical current travels through our bodies, it can interfere with the normal electrical signals between the brain and our muscles (e.g., heart may stop beating properly, breathing may stop, or muscles may spasm)
            When the electricity arcs (jumps, or "arcs") from an exposed energized conductor or circuit part (e.g., overhead power lines) through a gas (such as air) to a person who is grounded (that would provide an alternative route to the ground for the electrical current)
            Thermal burns from the heat radiated from an electric arc flash. Ultraviolet (UV) and infrared (IR) light emitted from the arc flash can also cause damage to the eyes.
          </h6>
          <br /><br />
          <h4 style={{ textAlign: 'right', color: 'orange' }}><b>COURSE OUTCOMES:</b></h4><br />
          <h6 style={{ textAlign: 'right', justifyContent: 'center' }}>
            Develop innovative, competent, ethical and quality engineers to contribute for technical advancements to meet societal needs
            Provide state-of-the-art facilities for continual improvement in teaching-learning process and research activities
            Enrich the knowledge and skill of the students to cater to the industrial needs and motivate them to become entrepreneurs
          </h6>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
          <a href="https://www.gvpce.ac.in/syllabi/B.Tech15-16/OE/Electrical%20Safety%20Management15-16.pdf" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>DOWNLOAD SYLLABUS</a>
            </button>
            <button className="btn btn-outline-primary mt-5" style={{ borderRadius: '20px' }}>
              <a href="C:\Users\sreeg\Downloads\jkk\WT BOOTSTRAP\bootstrap 1.html" style={{ textDecoration: 'none', textTransform: 'none', color: 'black' }}>BACK</a>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="https://consultivo.in/wp-content/uploads/2023/02/electrical-safety-featured-image-1.png" width="470px" height="400px" alt="Remote Sensing" />
        </div>
      </div>
    </div>
  );
};

export default Elect;

