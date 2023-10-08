import React from 'react';
import './Navbar.css'; // Make sure the path to your CSS file is correct

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mine ">
      <div className="container d-flex justify-content-evenly  ">
        <a className="navbar-brand" href="#"><img src="https://png.pngtree.com/png-clipart/20230207/original/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_8947100.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex justify-content-evenly" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item  mx-4">
              <a className="nav-link" href="#">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
