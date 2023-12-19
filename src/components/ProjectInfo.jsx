export default function ProjectInfo({ projects }) {
    return (
        <div className='project-info-container'>
            {projects.map(({ name, image, description, date }) => (
                <div className='project'>
                    <div className='project-card-image'>
                        <div className='project-icon'>{image}</div>
                    </div>
                    <div className='project-content'>
                        <h5 className='project-name'>{name}</h5>
                        <p className='project-description'>{description}</p>
                        <p className='project-date'>Date: {date}</p>
                    </div>
                </div>
            ))}
        </div>
    ); 
}