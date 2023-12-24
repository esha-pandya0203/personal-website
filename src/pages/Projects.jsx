import ProjectInfo from '../components/ProjectInfo';
import Image from 'react-bootstrap/Image';

export default function Projects() {
    const projects = [
        {
            name: 'Personal Website',
            image: <Image src={process.env.PUBLIC_URL + '/images/personal_website.png'} className='project-image' alt='personal-website' rounded />,
            description: 'A portfolio demonstrating my skills, projects, and past experience as well as contact information. (Written in JS, React, and CSS)',
            date: 'December 2023',
        },
        {
            name: 'Spreadsheet',
            image: <Image src={process.env.PUBLIC_URL + '/images/spreadsheet.png'} className='project-image' alt='spreadsheet-project' rounded />,
            description: 'A group project to develop a spreadsheet application from the ground up with the ability to save/revert previous versions, copy/paste cells, and format cells similar to Excel. Users can also insert/delete rows as desired and evaluate formulas. If needed, there is a help menu which explains all of the features. (Written in TS and React)',
            date: 'September 2023-December 2023',
        },
        {
            name: 'Travel Aid',
            image: <Image src={process.env.PUBLIC_URL + '/images/travel_aid_home.png'} className='project-image' alt='travel-aid' rounded/>, 
            description: 'A vacation planning website developed to help users check airport directions, weather, and convert currency. This project won the Best BIPOC-Led Hack in the TechTogether 2023 Boston Hackathon. (Written in HTML, CSS, and JS)',
            date: 'October 2022', 
        },
        {
            name: 'Task Manager',
            image: <Image src={process.env.PUBLIC_URL + '/images/task_manager.png'} className='project-image' alt='task-manager' rounded/>, 
            description: 'A task manager to increase organization and productivity by allowing users to add, complete, edit, and delete tasks. (Written in Python, HTML, Flask)',
            date: 'September 2022',
        },
    ]; 

    return (
        <div className='projects rounded-container' id='projects'>
            <h2 className='projects-heading'>Projects</h2>
            <div className='projects-container'>
                <ProjectInfo projects={projects} />
            </div>
        </div>
    ); 
}