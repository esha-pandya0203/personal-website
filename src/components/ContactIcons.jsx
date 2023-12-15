import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Home() {
    return (
        <div className='contact-icons'>
            <a href='https://github.com/esha-pandya0203' className='icon'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/eshapandya/' className='icon'>
                <FaLinkedin />
            </a>
            <a href='mailto:esha.pandya@gmail.com' className='icon'>
                <IoIosMail />
            </a>
        </div>
    ); 
}