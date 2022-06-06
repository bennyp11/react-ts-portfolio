import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import reactIcon from '../../assets/react-icon.svg';
import githubIcon from '../../assets/github.png';
import './Footer.css';

export default function Footer() {
    return(
        <div className="footer-container">
        <Router>
        <HashLink smooth to="#home" className="logo">
        <div className="bottom-logo-container">
            <span className="stylized-benny">Benny</span>
            <span className="stylized-p"> P</span>
        </div>
        </HashLink>

        <div className="kicker-container">
            <p>Made with ❤️ in <img src={reactIcon} id="react" alt="React" /> by Benjamin Pollock</p>
        </div>

        <div>
        <a
          href="https://github.com/bennyp11"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} id="github" alt="GitHub" />
        </a>
        </div>

      </Router>
      </div>
    );
}