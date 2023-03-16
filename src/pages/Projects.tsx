import { useEffect } from 'react';
import { ProjectProps, Project } from '../components'

const projects = new Array<ProjectProps>(
    {
        key: 1,
        img: require('../assets/img/projects/test_task_hello_Evano.png'), 
        link: 'https://lucky4rever.github.io/Test-task-Hello-Evano/',
        description: 'Проект на замовлення, зроблений Pixel-Perfect версткою.'
    },
    {
        key: 2,
        img: require('../assets/img/projects/three_ico_large-playstore.png'),
        link: undefined,
        description: 'Невеликий пет-проект, написаний на Kotlin.'
    }
);

const Projects = () => {
    useEffect(() => {
        document.title = 'Проекти';
    }, []);
    
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої проекти</div>
            <hr className='title-hr' />
            <div className='all-projects'>
                {projects.map(project => {
                    return <Project key={project.key} img={project.img} link={project.link} description={project.description} />
                })}
            </div>
        </div>
    )
};

export default Projects;