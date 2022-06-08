import LiveBackground from '../Particles/Particles';
import { LandingPage } from '../LandingPage/LandingPage';
import  Bio  from '../Bio/Bio';
import { Projects } from '../Projects/Projects';
import Form from '../Form/Form';
import './Main.css';

export default function Main() {
    return(
    <>
    <div id="home">
    <LiveBackground />
    <LandingPage />
    <Bio />
    <Projects />
    <Form />
    </div>
    </>
    );
}