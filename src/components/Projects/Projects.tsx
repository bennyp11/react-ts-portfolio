import { AnimationOnScroll } from 'react-animation-on-scroll';
import githubIcon  from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import "animate.css/animate.min.css";
import './Projects.css';

export function Projects() {
    return (
        <div id="projects">
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="project-header">
        <h3>What I've Built</h3>
        </div>
        </AnimationOnScroll>
        <div className="projects">
        <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/bennyp11/smartbrain-frontend" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>SmartBrain</h3>
            <p>Utilizes a 3rd party facial recognition API to identify and count human faces from uploaded photos. Has secure, end-to-end encryption for registration and login, through bcrypt.
            </p>
          </div>
          <div className="project-footer">
            <ul className="tech-list">
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Postgres</li>
              <li>Heroku</li>
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
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://129.146.97.110:3000/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sendmo / Requestmo</h3>
              <p>A simple application that generates a QR link integrated into Venmo payments. By scanning the QR, a Venmo transaction will be automatically generated. Enables merchants to do QR based sales.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
                <li>React</li>
                <li>Forms</li>
                <li>Typescript</li>
                <li>Payments</li>
                <li>gCloud</li>
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
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>No Bad Passwords</h3>
              <p>Password strength indicator and validator. It uses DropBox's zxcvbn package to evaluate the strength of the user's password in a registration form. Poor scoring passwords do not make it through the validation and cannot be submitted.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>zxcvbn</li>
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
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Custom ReactJS Portfolio</h3>
              <p>Software portfolio showcasing React skills
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
                <li>React</li>
                <li>React Router</li>
                <li>CSS</li>
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
                <img src={githubIcon} alt="visit my site" />
              </a>
              <a href="https://github.com/bennyp11/robofriends-pwa" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Robofriends</h3>
              <p>Search through a list of cool robots to find your friends.
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Progressive Web App</li>
                <li>In-App Search</li>
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
                <img src={githubIcon} alt="visit my site" />
              </a>
              <a href="https://bennyp11.github.io/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="visit my site" />
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
                <li>Bash Scripting</li>
                <li>Oracle Cloud</li>
                <li>ReactJS</li>
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
              <h3>Infrastructure Architect's Delight</h3>
              <p>A display of cloud high availability system architecture. Uses resilient Kubernetes clustering, a scalable MySQL DB, and web traffic load balancing algorithms. 
              </p>
            </div>
            <div className="project-footer">
              <ul className="tech-list">
                <li>Kubernetes</li>
                <li>Java / Spring Boot</li>
                <li>MySQL</li>
                <li>Load Balancing</li>
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
                <li>Oracle</li>
                <li>React</li>
                <li>Java / Heliodon</li>
                <li>Kubernetes</li>
                <li>Object Storage</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
        </div>
        </div>
    );
}