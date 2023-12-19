export default function ProjectInfo({ project }) {
    return (
        <div className='project-info-container'>
            {project.map(({ name, image, description }) => (
                <div className='project'>
                    <div className='project-image'>
                        <div className='project-icon'>{image}</div>
                    </div>
                    <div className='project-info'>
                        <div className='project-name'>{name}</div>
                        <div className='project-description'>{description}</div>
                    </div>
                </div>
            ))}
        </div>
    ); 
}