import ContactIcons from '../components/ContactIcons';
import About from './About'; 
import Contact from './Contact'; 
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
    const scrollToAbout = (e) => {
        e.preventDefault(); 

        document.getElementById('home-about')?.scrollIntoView({behavior: 'smooth'}); 
    }; 
    return (
        <>
            <section className='hero'>
                <div className='hero-content'>
                    <h1 className='name'>Esha Pandya</h1>
                    <p className='role-description'>Student | Data Analyst</p>
                    <ContactIcons /> 
                </div>

                <a 
                    href='#home-about' 
                    className='arrow-icon'
                    onClick={scrollToAbout}
                    aria-label='Scroll to About Section'
                >
                    <FaRegArrowAltCircleDown /> 
                </a>
            </section>

            <section id='home-about' className='home-about'>
                <About /> 
            </section>

            <section className='home-contact'>
                <Contact /> 
            </section>
        </>
    ); 
}