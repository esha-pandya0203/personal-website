import Image from 'react-bootstrap/Image';
import Timeline from '../components/Timeline';

export default function WorkExperience() {
    const experiences = [
        {
            company: 'Verisk Analytics',
            title: 'Software Developer',
            date: 'January 2024 - Present',
            description: ['TBD'],
            image: <Image src={process.env.PUBLIC_URL + '/images/verisk_logo.png'} className='company-image' alt='verisk-logo' circle />,
        },
        {
            company: 'Northeastern University',
            title: 'Peer Tutor',
            date: 'September 2023 - Present',
            description: ['Prepare 1-2 hour sessions for students in Object-Oriented Design, Fundamentals of Computer Science II, and Fundamentals of Digital Design and Computer Organization'],
            image: <Image src={process.env.PUBLIC_URL + '/images/northeastern_logo.png'} className='company-image' alt='northeastern-logo' circle />,
        },
        {
            company: 'Verisk Analytics',
            title: 'Software Developer',
            date: 'January 2023 - June 2023',
            description: ['Created an API request in C# responsible for retrieving data from the database', 'Built a CDK to create/update cloud resources', 'Wrote unit tests to improve code coverage for multiple repositories using the C# Moq class'],
            image: <Image src={process.env.PUBLIC_URL + '/images/verisk_logo.png'} className='company-image' alt='verisk-logo' circle />,
        },
        {
            company: 'Juni Learning',
            title: 'Computer Science Instructor',
            date: 'May 2022 - Present',
            description: ['Execute advanced computer science lesson plans ranging from basic data structures to applied programming', 'Maintain thorough records for up to 5 students, covering multiple courses and skill level progression', 'Guide students through logic problems and debugging practices in Scratch, Python, Java, and JavaScript'],
            image: <Image src={process.env.PUBLIC_URL + '/images/juni_learning_logo.png'} className='company-image' alt='juni-learning-logo' circle />,
        },
    ]

    return (
        <div className='work-experience rounded-container'>
            <h2>Work Experience</h2>
            <Timeline experiences={experiences} />
        </div>
    ); 
}