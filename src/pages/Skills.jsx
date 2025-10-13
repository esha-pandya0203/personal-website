import SkillBar from '../components/SkillBar';
import { FaPython } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
 import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJunit5 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { FaConfluence } from "react-icons/fa";
import { SiEclipseide } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";

export default function Skills() {
    const languages = [
        {
            skill: 'Python',
            logo: <FaPython className='language-icon' alt='python-icon'/>, 
            percentage: 35,
        },
        {
            skill: 'SQL',
            logo: <TbFileTypeSql className='language-icon' alt='sql-icon'/>, 
            percentage: 35,
        },
        {
            skill: 'Java',
            logo: <FaJava className='language-icon' alt='java-icon'/>, 
            percentage: 90,
        },
        {
            skill: 'HTML5',
            logo: <FaHtml5 className='language-icon' alt='html-icon'/>, 
            percentage: 85,
        },
        {
            skill: 'C#',
            logo: <SiCsharp className='language-icon' alt='c-sharp-icon'/>, 
            percentage: 80,
        },
        {
            skill: 'CSS',
            logo: <IoLogoCss3 className='language-icon' alt='css-icon'/>, 
            percentage: 90,
        },
        {
            skill: 'TypeScript',
            logo: <SiTypescript className='language-icon' alt='typescript-icon'/>, 
            percentage: 95,
        },
        {
            skill: 'JavaScript',
            logo: <IoLogoJavascript className='language-icon' alt='javascript-icon'/>, 
            percentage: 95,
        },
    ]; 

    const librariesFrameworks = [
        {
            skill: 'Pandas',
            logo: <SiPandas className='library-framework-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'NumPy',
            logo: <SiNumpy className='library-framework-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Streamlit',
            logo: <SiStreamlit className='library-framework-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'React',
            logo: <FaReact className='library-framework-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'JUnit',
            logo: <SiJunit5 className='library-framework-icon' alt='junit-icon'/>, 
            percentage: 70,
        },
        {
            skill: 'Bootstrap',
            logo: <FaBootstrap className='library-framework-icon' alt='bootstrap-icon'/>, 
            percentage: 80,
        },
        {
            skill: 'Jest',
            logo: <SiJest className='library-framework-icon' alt='jest-icon'/>, 
            percentage: 80,
        },
    ]; 

    const toolsPlatforms = [
        {
            skill: 'GitHub',
            logo: <FaGithub className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'PostgreSQL',
            logo: <BiLogoPostgresql className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'SQL Server',
            logo: <DiMsqlServer className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Visual Studio Code',
            logo: <BiLogoVisualStudio className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Visual Studio',
            logo: <DiVisualstudio className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Azure DevOps',
            logo: <VscAzureDevops className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Confluence',
            logo: <FaConfluence className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'Eclipse',
            logo: <SiEclipseide className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'IntelliJ',
            logo: <SiIntellijidea className='tools-platform-icon' alt='react-icon'/>, 
            percentage: 75,
        },
    ]

    return (
        <div className='skills rounded-container' id='skills'>
            <h2 className='skills-heading'>Skills</h2>
            <div className='languages-container'>
                <h4 className='languages-label'>Languages</h4>
                <SkillBar skills={languages} />
            </div>
            <div className='libraries-frameworks-container'>
                <h4 className='libraries-frameworks-label'>Libraries/Frameworks</h4>
                <SkillBar skills={librariesFrameworks} />
            </div>
            <div className='tools-platforms-container'>
                <h4 className='tools-platforms-label'>Tools/Platforms</h4>
                <SkillBar skills={toolsPlatforms} /> 
            </div>
        </div>
    ); 
}