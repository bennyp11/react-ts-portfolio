import GifLogo from "../../assets/bennyp-logo.gif";
import "./LandingPage.css";

export function LandingPage(){
  return(
    <div className="landing-page" >
          <img id="landing-logo" src={GifLogo} alt="logo" />
    </div>
  )
}