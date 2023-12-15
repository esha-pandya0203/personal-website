import ContactIcons from '../components/ContactIcons';
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
    return (
        <div className='home rounded-container'>
            <h1>Esha Pandya</h1>
            <h6>Student | Software Developer</h6>
            <ContactIcons />
            <a href='#about' className='arrow-icon'>
                <FaRegArrowAltCircleDown />
            </a>
        </div>
    ); 
}