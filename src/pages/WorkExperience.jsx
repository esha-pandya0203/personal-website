import Image from 'react-bootstrap/Image';
import Timeline from '../components/Timeline';

export default function WorkExperience() {
    const experiences = [
        {
            company: 'Centrova',
            title: 'Data Analyst',
            date: 'November 2024 - March 2025',
            description: ['Performed exploratory data analysis with NumPy and Pandas, researching binary classification methods for optimization', 'Contributed to early data needs in fast-paced startup environment through independent learning and trial-and-error'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/centrova.png'} className='company-image' alt='centrova-logo' circle />,
        },
        {
            company: 'Northeastern University',
            title: 'Teaching Assistant',
            date: 'September - December 2025',
            description: ['Assisted 60 students in Fundamentals of Software Engineering, supporting in-class activities using TypeScript and React', 'Graded assignments on software practices (user stories, UI designs, and testing patterns), providing individualized feedback to reinforce course understanding'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/northeastern_logo.png'} className='company-image' alt='northeastern-logo' circle />,
        },
        {
            company: 'Verisk Analytics',
            title: 'Software Developer',
            date: 'January - June 2024',
            description: ['Integrated a team performance metric for an internal dashboard, using Python for data analysis, SQL Server for data persistence, C# for backend logic, and React for front-end data visualization', 'Improved dashboard reliability by streamlining metric logic and data persistence logic, eliminating previous data loss', 'Automated scrum reporting with PowerShell scripts, saving ~4 hours of manual work for scrum masters per month'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/verisk_logo.png'} className='company-image' alt='verisk-logo' circle />,
        },
        {
            company: 'Northeastern University',
            title: 'Peer Tutor',
            date: 'September - December 2023',
            description: ['Prepare 1-2 hour personalized sessions for students in Object-Oriented Design, Fundamentals of Computer Science II, and Fundamentals of Digital Design and Computer Organization'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/northeastern_logo.png'} className='company-image' alt='northeastern-logo' circle />,
        },
        {
            company: 'Verisk Analytics',
            title: 'Software Developer',
            date: 'January 2023 - June 2023',
            description: ['Boosted codebase quality by increasing testing coverage by 35% across multiple projects using C# Moq', 'Implemented an API endpoint to retrieve, sort, and return activity management data by integrating logic across data, business, and API layers of the application'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/verisk_logo.png'} className='company-image' alt='verisk-logo' circle />,
        },
        {
            company: 'Juni Learning',
            title: 'Computer Science Instructor',
            date: 'May 2022 - June 2024',
            description: ['Guided K-12 students in 1:1 instruction from beginner to advanced, tailoring lesson plans to individual learning styles', 'Taught basic data structures, applied programming, and debugging practices in Scratch, Python, Java, and JavaScript'],
            image: <Image src={process.env.PUBLIC_URL + '/images/company-logos/juni_learning_logo.png'} className='company-image' alt='juni-learning-logo' circle />,
        },
    ]

    return (
        <div className='work-experience rounded-container' id='experience'>
            <h2 className='work-header'>Work Experience</h2>
            <Timeline experiences={experiences} />
        </div>
    ); 
}