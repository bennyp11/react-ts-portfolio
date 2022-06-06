import Resume from "../../assets/bp-resume.pdf";
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import './Header.css';

export default function Header() {
    return(
        <div className="header-container">
        <Router>
        <HashLink smooth to="#home" className="logo">
        <div className="logo-container">
            <span className="stylized-benny">Benny</span>
            <span className="stylized-p"> P</span>
        </div>
        </HashLink>

        <div className="link-container">
        <nav>
          <NavHashLink smooth to="#home" >
            <label>Home</label>
          </NavHashLink>
          <NavHashLink smooth to="#aboutme" >
            <label>About Me</label>
          </NavHashLink>
          <NavHashLink smooth to="#projects" >
            <label>Projects</label>
          </NavHashLink>
          <NavHashLink smooth to="#contactme" >
            <label>Contact Me</label>
          </NavHashLink>
            <button><a href="https://bennypollock-bucket.s3.us-west-1.amazonaws.com/Ben+Pollock+Resume.pdf" download>Resume</a></button>
        </nav>
        </div>

      </Router>
      </div>
    );
}


