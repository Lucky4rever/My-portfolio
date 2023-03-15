import { useEffect } from 'react';
import ProjectProps, { Project } from '../components/Project'

const projects = new Array<ProjectProps>(
    new ProjectProps(
        require('../assets/img/projects/test_task_hello_Evano.png'), 
        'https://lucky4rever.github.io/Test-task-Hello-Evano/',
        'Проект на замовлення, зроблений Pixel-Perfect версткою.'
    ),
    new ProjectProps(
        require('../assets/img/projects/three_ico_large-playstore.png'),
        undefined,
        'Невеликий пет-проект, написаний на Kotlin.'
    )
);

const MyProjects = () => {
    useEffect(() => {
        document.title = 'Проекти';
    }, []);
    
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої проекти</div>
            <hr className='title-hr' />
            <div className='all-projects'>
                {
                    projects.map(project => {
                        console.log(project.img)
                        return <Project img={project.img} link={project.link} description={project.description} />
                    })
                }
            </div>
        </div>
    )
};

export default MyProjects;