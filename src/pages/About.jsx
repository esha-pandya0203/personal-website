export default function About() {
    return (
        <div className='about rounded-container' id='about'>
            <div className='about-picture'>
                <img src={process.env.PUBLIC_URL + '/images/esha-profile.jpg'} className='profile-picture' alt='profile'/>
            </div>
            <div className='about-text'>
                <h2 className='about-heading'>About Me</h2>
                <p className='about-p'>I am a first-year graduate student at Carnegie Mellon University pursuing a Master of Sciencce 
                    in Health Care Analytics and Information Technology. I graduated summa cum laude from Northeastern University with 
                    a B.S. in Computer Science and a minor in Business Administration. 
                    As I head into the start of my career, I'm dedicated to making a lasting impact in the healthcare industry. 
                    I'm looking forward to collaborating with passionate, like-minded individuals to discover a solution to 
                    improve the lives of those in need. Currently, I'm expanding my efforts to not only improve my skills and 
                    knowledge of software development practices (through both academic and independent projects) but also to 
                    learn and discover the capabilities of Python and different libraries through a data science lens. 
                    My previous software projects have reinforced my expertise in logical reasoning, debugging, proper 
                    documentation, and design patterns.
                </p>
            </div>
        </div>
    ); 
}