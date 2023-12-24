import ContactIcons from '../components/ContactIcons';
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
    return (
        <div className='home rounded-container' id='home'>
            <h1 className='name'>Esha Pandya</h1>
            <h5 className='role-description'>Student | Software Developer</h5>
            <ContactIcons />
            <a href='#about' className='arrow-icon'>
                <FaRegArrowAltCircleDown />
            </a>
        </div>
    ); 
}