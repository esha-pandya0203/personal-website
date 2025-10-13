import SkillBar from '../components/SkillBar';

export default function Skills() {
    const languages = [
        {
            skill: 'Python',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/python.png'} className='language-icon' alt='python-icon'/>, 
            percentage: 35,
        },
        {
            skill: 'SQL',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/sql.png'} className='language-icon' alt='sql-icon'/>, 
            percentage: 35,
        },
        {
            skill: 'Java',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/java.png'} className='language-icon' alt='java-icon'/>, 
            percentage: 90,
        },
        {
            skill: 'HTML5',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/html-5.png'} className='language-icon' alt='html-icon'/>, 
            percentage: 85,
        },
        {
            skill: 'C#',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/c-sharp.png'} className='language-icon' alt='c-sharp-icon'/>, 
            percentage: 80,
        },
        {
            skill: 'CSS',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/css-3.png'} className='language-icon' alt='css-icon'/>, 
            percentage: 90,
        },
        {
            skill: 'TypeScript',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/typescript.png'} className='language-icon' alt='typescript-icon'/>, 
            percentage: 95,
        },
        {
            skill: 'JavaScript',
            logo: <img src={process.env.PUBLIC_URL + '/images/language-icons/javascript.png'} className='language-icon' alt='javascript-icon'/>, 
            percentage: 95,
        },
    ]; 

    const librariesFrameworks = [
        {
            skill: 'React',
            logo: <img src={process.env.PUBLIC_URL + '/images/library-icons/react-svgrepo-com.svg'} className='library-framework-icon' alt='react-icon'/>, 
            percentage: 75,
        },
        {
            skill: 'JUnit',
            logo: <img src={process.env.PUBLIC_URL + '/images/library-icons/junit.png'} className='library-framework-icon' alt='junit-icon'/>, 
            percentage: 70,
        },
        {
            skill: 'Bootstrap',
            logo: <img src={process.env.PUBLIC_URL + '/images/library-icons/bootstrap.png'} className='library-framework-icon' alt='bootstrap-icon'/>, 
            percentage: 80,
        },
        {
            skill: 'Jest',
            logo: <img src={process.env.PUBLIC_URL + '/images/library-icons/jest-js-icon.svg'} className='library-framework-icon' alt='jest-icon'/>, 
            percentage: 80,
        },
    ]; 

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
        </div>
    ); 
}