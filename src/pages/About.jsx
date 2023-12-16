export default function About() {
    return (
        <div className='about rounded-container'>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/esha-picture.png'} className='profile-picture' alt='profile'/>
            </div>
            <div className='about-text'>
                <h2>About Me</h2>
                <p>I am a third-year Computer Science student at Northeastern University, pursuing a minor in Business Administration. I'm focused on improving my skills and knowledge in Java, C#, and Python through both academic and independent projects.
                    These projects have reinforced my expertise in logical reasoning, debugging, and proper documentation/practices. I am a part time Computer Science Instructor at Juni Learning, teaching students in Scratch, Python, Java, and JavaScript. 
                    Being both an instructor and a tutor for Northeastern have improved my ability to explain complex concepts in simple terms and my ability to develop solutions on the spot. 
                    I aspire to secure a role allowing me to collaborate with passionate like-minded individuals to develop consumer-centric products. 
                </p>
            </div>
        </div>
    ); 
}