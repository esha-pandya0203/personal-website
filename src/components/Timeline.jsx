export default function Timeline({ experiences }) {
    return (
        <div className='timeline-container'>
            {experiences.map(({ company, title, date, description, image }) => (
                <div className='experience'>
                    <div className='title-date-section'>
                        <h4 className='title'>{title}</h4> 
                        <p className='date'>{date}</p>
                    </div>
                    <div className='timeline'></div>
                    <div className='experience-image-section'>
                        {image}
                    </div>
                    <div className='company-description-section'>
                        <h4 className='company-name'>{company}</h4>
                        <div className='experience-description'>
                            <ul>
                                {description.map((bullet) => (
                                    <li>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ); 
}