import { AnimationOnScroll } from 'react-animation-on-scroll';
import githubIcon  from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import mixpanel from "mixpanel-browser";
import "animate.css/animate.min.css";
import './Projects.css';

mixpanel.init('fe861a6c319cb81c90d980c76121b1f6', {debug: true, ignore_dnt: true}, 'bennypdesign');


export function Projects() {
    return (
        <div id="projects">
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="project-header">
        <h3>What I've Built.</h3>
        </div>
        </AnimationOnScroll>
        <div className="projects">
        <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/bennyp11/smartbrain-v2-front-end" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
            </a>
            <a href="https://effortless-kitsune-f7701e.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" onClick={() => {
              mixpanel.bennypdesign.track('smartbrain-site-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}/>
            </a>
          </div>
          </header>
          <div className="body">
            <h3>SmartBrain</h3>
            <p>Counts human faces in uploaded photos. Has secure, end-to-end encryption for registration and login, through bcrypt.
            </p>
          </div>
          <div className="project-footer">
            <ul className="tech-list">
              <li>{'{'}ReactJS{'}'} {'{'}NodeJS{'}'} {'{'}Postgres{'}'} {'{'}Heroku{'}'} {'{'}Clarifai{'}'}</li>
            </ul>
          </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11/sendmo-vanilla" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
              </a>
              <a href="https://www.sendmo.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" onClick={() => {
              mixpanel.bennypdesign.track('sendmo-site-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}/>
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sendmo</h3>
              <p>Generate custom QR for Venmo payments. Simply scan the QR to generate a Venmo payment. Enables merchants to do QR based sales.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}JavaScript{'}'} {'{'}JQuery{'}'} {'{'}CSS{'}'} {'{'}Netlify{'}'} {'{'}Payments{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" onClick={() => {
                mixpanel.bennypdesign.track('github-visited', {
                'source': "bennyp.design",
                'Opted out of email': false
              });
            }} />
              </a>
              <a href="https://bennyp11.github.io" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" onClick={() => {
                mixpanel.bennypdesign.track('nobadpasswords-site-visited', {
                'source': "bennyp.design",
                'Opted out of email': false
              });
            }}/>
              </a>
            </div>
            </header>
            <div className="body">
              <h3>No Bad Passwords</h3>
              <p>Have your password scored while you register. Bad passwords do not make it through the validation and cannot be submitted.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}TypeScript{'}'} {'{'}React{'}'} {'{'}zxcvbn{'}'} {'{'}CSS{'}'} {'{'}github pages{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11/react-custom-portfolio" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Custom ReactJS Portfolio</h3>
              <p>Software portfolio showcasing React skills, including routing, html, css, and js.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}ReactJS{'}'} {'{'}React Router{'}'} {'{'}CSS{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11/robofriends-pwa" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Robofriends</h3>
              <p>Search through a list of cool robots to find your friends on this ReactJS Progressive Web App.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}ReactJS{'}'} {'{'}Redux{'}'} {'{'}In-App Search{'}'} {'{'}Netlify{'}'} {'{'}PWA{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Create-React-App Quickstart</h3>
              <p>Quickly installs and runs a copy of create-react-app on a fresh Oracle Linux 7 server.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}Bash Scripting{'}'} {'{'}Oracle Cloud{'}'} {'{'}Linux{'}'} {'{'}React{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }} />
              </a>
              <a href="https://bennyp.tech" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Infra Architect's Delight</h3>
              <p>High availability cloud app. Kubernetes clustering, a scalable MySQL DB, load balancing algorithms. 
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}Kubernetes{'}'} {'{'}Java{'}'} {'{'}MySQL{'}'} {'{'}Load Balancer{'}'} {'{'}OCI{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="visit my site" />
              </a>
              <a href="https://bennyp.tech" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Full Stack To Do List</h3>
              <p>A cloud native app hooked up to the Oracle Autonomous Database. Tracks a basic list of todos.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}Oracle{'}'} {'{'}React{'}'} {'{'}Java{'}'} {'{'}Kubernetes{'}'} {'{'}Oject Storage{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bennyp11" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="visit my site" onClick={() => {
              mixpanel.bennypdesign.track('github-visited', {
              'source': "bennyp.design",
              'Opted out of email': false
            });
          }}/>
              </a>
              <a href="https://bennyp.tech" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Random JS Front Ends</h3>
              <p>A Web Boom Box for up and coming DJs. A simple calculator. The first website I ever coded. 
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
              <li>{'{'}JavaScript{'}'} {'{'}CSS{'}'} {'{'}HTML{'}'} {'{'}Static Hosting{'}'} {'{'}AWS{'}'}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        </div>
        </div>
    );
}