import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillBar({ skills }) {
    return (
        <div className='skillbar-container'>
            {skills.map(({ skill, logo, percentage }) => (
                <div className='skill'>
                    <div className='skill-name'>
                        <div className='skill-icon'>{logo}</div>
                        <div className='skill-label'>{skill}</div>
                    </div>
                    <div className='skill-percentage'>
                        <ProgressBar animated now={percentage}/>
                    </div>
                </div>
            ))}
        </div>
    ); 
}