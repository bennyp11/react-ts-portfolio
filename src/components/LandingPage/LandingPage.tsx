import GifLogo from "../../assets/bennyp-logo.gif";
import "./LandingPage.css";

export function LandingPage(){
  return(
    <div className="landing-page" id="home">
          <img src={GifLogo} alt="logo" />
    </div>
  )
}