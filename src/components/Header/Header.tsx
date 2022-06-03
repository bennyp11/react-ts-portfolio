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
          <span>Benny</span>
          <span> P</span>
        </div>
        </HashLink>

        <div className="link-container">
        <nav>
          <NavHashLink smooth to="#home" >
            Home
          </NavHashLink>
          <NavHashLink smooth to="#aboutme" >
            About Me
          </NavHashLink>
          <NavHashLink smooth to="#projects" >
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#contactme" >
            Contact Me
          </NavHashLink>
        </nav>
        </div>

      </Router>
      </div>
    );
}


