import portrait from "../../assets/portrait.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import pgIcon from "../../assets/pg-icon.svg";
import oracleIcon from "../../assets/oracle-icon.svg";
import gcloudIcon from "../../assets/gcloud-icon.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import "./Bio.css";


function Bio() {
  return(
    <div id="bio">
      <div className="about-text">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" style={{marginTop: "30vh"}}>
          <h2>About Ben</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={0.2 * 1000}>
          <p>I'm an entreprenuerial minded, self-taught software developer. My background in sales engineering, account management, finance and consulting can bring a fresh perspective to your engineering team.</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>I am not a traditional developer. I have a B.A. in Business-Economics from UCLA, where I created a profitable tech consulting organization. I began my post-grad career selling and setting up customer's production cloud infrastructure at Oracle Corp.</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={0.6 * 1000}>
          <p>During my 3+ year tenure at Oracle, I learned full stack during nights and weekends. One day, I hope to build a successful software company from scratch. Let me help you do the same!
          </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={0.1 * 1000}>
        <br></br>
        <br></br>
          <h3>Here are the main technologies I work with:</h3>
        </AnimationOnScroll>
        <div className="hard-skills">

          <div className="hability">
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.3 * 1000}>
              <img src={reactIcon} alt="React" />
            </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.4 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.5 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.7 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.8 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.9 * 1000}>
            <img src={pgIcon} alt="postgres" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={1 * 1000}>
            <img src={oracleIcon} id="oracle" alt="oracle" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={1.1 * 1000}>
            <img src={gcloudIcon} alt="gcloud" />
          </AnimationOnScroll>
          </div>

        </div>
      </div>
    <div className="about-image">
        <AnimationOnScroll animateIn="animate__fadeInRight" delay={0.6 * 1000}>
          <img src={portrait} alt="portrait" />
        </AnimationOnScroll>
    </div>
    </div>
  )
}

export default Bio;