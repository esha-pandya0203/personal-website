import ProjectInfo from '../components/ProjectInfo';
import Image from 'react-bootstrap/Image';

export default function Projects() {
    const projects = [
        {
            name: "Job Analyzer", 
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/job_analyzer.png'} className='project-image' alt='job-analyzer-project' rounded />, 
            description: 'A group project to develop an application that helps job seekers understand which skills are most valuable in their industry and plan their career by eliminating current issues with the search process such as fragmented and outdated information. For this project we focused specifically on jobs within the technology industry, located within the United States with further emphasis on jobs in Pittsburgh.', 
            date: 'September - October 2025',
            gh_repo_link: 'https://github.com/esha-pandya0203/dfp-job-analyzer', 
            gh_commit_link: 'https://github.com/esha-pandya0203/dfp-job-analyzer/commits?author=esha-pandya0203'
        }, 
        {
            name: "Goods4Goods", 
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/goods_for_goods.png'} className='project-image' alt='goods_for_goods' rounded />, 
            description: 'Goods4Goods is a data driven trade-based app where you can post items you no longer need and trade them for items you’ve been wanting. It’s the perfect solution for anyone looking to refresh their collection or declutter without spending money. Our platform allows users to list items they no longer need, specify what they’re looking for in return, and connect with reputable traders.', 
            date: 'April - May 2025',
            gh_repo_link: 'https://github.com/esha-pandya0203/goods4goods', 
            gh_commit_link: 'https://github.com/esha-pandya0203/goods4goods/commits?author=esha-pandya0203', 
            demo_link: 'https://drive.google.com/file/d/1gsCdsV5zsWeWuaxMSI0h2tybzUaWOk5w/view?usp=drive_link'           
        }, 
        {
            name: 'Personal Website',
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/personal_website.png'} className='project-image' alt='personal-website' rounded />,
            description: 'A portfolio demonstrating my skills, projects, and past experience as well as contact information. (Written in JS, React, and CSS)',
            date: 'December 2023',
            gh_repo_link: 'https://github.com/esha-pandya0203/personal-website', 
            gh_commit_link: 'https://github.com/esha-pandya0203/personal-website/commits?author=esha-pandya0203'
        },
        {
            name: 'Spreadsheet',
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/spreadsheet.png'} className='project-image' alt='spreadsheet-project' rounded />,
            description: 'A group project to develop a spreadsheet application from the ground up with the ability to save/revert previous versions, copy/paste cells, and format cells similar to Excel. Users can also insert/delete rows as desired and evaluate formulas. If needed, there is a help menu which explains all of the features. (Written in TS and React)',
            date: 'September - December 2023',
            demo_link: 'https://drive.google.com/file/d/1UyYN-lhFZpG_QHGdg_k_wXGfZdM-DkgP/view?usp=sharing'
        },
        {
            name: 'Travel Aid',
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/travel_aid_home.png'} className='project-image' alt='travel-aid' rounded/>, 
            description: 'A vacation planning website developed to help users check airport directions, weather, and convert currency. This project won the Best BIPOC-Led Hack in the TechTogether 2023 Boston Hackathon. (Written in HTML, CSS, and JS)',
            date: 'October 2022', 
            gh_repo_link: 'https://github.com/SindhuMu/techtogether', 
            gh_commit_link: 'https://github.com/SindhuMu/techtogether/commits?author=esha-pandya0203', 
            demo_link: 'https://media15live.com/studentsUpload/SindhuEsha_1667142315/index.html'
        },
        {
            name: 'Task Manager',
            image: <Image src={process.env.PUBLIC_URL + '/images/project-thumbnails/task_manager.png'} className='project-image' alt='task-manager' rounded/>, 
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