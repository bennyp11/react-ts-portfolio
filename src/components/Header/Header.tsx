import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import mixpanel from 'mixpanel-browser';
import './Header.css';


mixpanel.init('fe861a6c319cb81c90d980c76121b1f6', {debug: true, ignore_dnt: true}, 'bennypdesign');

export default function Header() {
    return(
        <div className="header-container">
        <Router>
        <HashLink smooth to="#" className="logo" onClick={() => {
            mixpanel.bennypdesign.track('home-click', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>
        <div className="logo-container">
            <span className="stylized-benny">Benny</span>
            <span className="stylized-p"> P</span>
        </div>
        </HashLink>

        <div className="link-container">
        <nav>
          <NavHashLink smooth to="#home" onClick={() => {
            mixpanel.bennypdesign.track('home-click', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>
            <label>Home</label>
          </NavHashLink>
          <NavHashLink smooth to="#bio" onClick={() => {
            mixpanel.bennypdesign.track('bio-click', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>
            <label>Bio</label>
          </NavHashLink>
          <NavHashLink smooth to="#projects" onClick={() => {
            mixpanel.bennypdesign.track('projects-click', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>
            <label>Projects</label>
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={() => {
            mixpanel.bennypdesign.track('contact-click', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>
            <label>Contact</label>
          </NavHashLink>
            <button><a href="https://bennypollock-bucket.s3.us-west-1.amazonaws.com/Ben+Pollock+Resume.pdf" download onClick={() => {
            mixpanel.bennypdesign.track('resume-downloaded', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}>Resume</a></button>
        </nav>
        </div>

      </Router>
      </div>
    );
}
