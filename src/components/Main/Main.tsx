import LiveBackground from '../Particles/Particles';
import { LandingPage } from '../LandingPage/LandingPage';
import { Bio } from '../Bio/Bio';
import { Projects } from '../Projects/Projects';

export default function Main() {
    return(
    <>
    <LiveBackground />
    <LandingPage />
    <Bio />
    <Projects />
    </>
    );
}