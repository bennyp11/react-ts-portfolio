import LiveBackground from '../Particles/Particles';
import { LandingPage } from '../LandingPage/LandingPage';
import  Bio  from '../Bio/Bio';
import { Projects } from '../Projects/Projects';
import { Calendly } from '../Calendly/Calendly';
import ContactForm from '../ContactForm/ContactForm';

export default function Main() {
    return(
    <>
    <LiveBackground />
    <LandingPage />
    <Bio />
    <Projects />
    <Calendly />
    <ContactForm />
    </>
    );
}