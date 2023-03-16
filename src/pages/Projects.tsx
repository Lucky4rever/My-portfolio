import { useEffect } from 'react';
import { Project } from '../components';
import { MyProjects } from '../utils';

const Projects = () => {
    useEffect(() => {
        document.title = 'Проекти';
    }, []);
    
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої проекти</div>
            <hr className='title-hr' />
            <div className='all-projects'>
                {MyProjects.map(project => {
                    return <Project key={project.key} img={project.img} link={project.link} description={project.description} />
                })}
            </div>
        </div>
    )
};

export default Projects;