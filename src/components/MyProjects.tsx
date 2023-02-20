import ProjectProps, { Project } from './Project'

const projects = new Array<ProjectProps>(
    new ProjectProps(
        require('../img/projects/test_task_hello_Evano.png'), 
        'https://lucky4rever.github.io/Test-task-Hello-Evano/',
        'Проект на замовлення, зроблений Pixel-Perfect версткою.'
    ),
    new ProjectProps(
        require('../img/projects/three_ico_large-playstore.png'),
        undefined,
        'Невеликий пет-проект, написаний на Kotlin.'
    )
);

export const MyProjects = () => {
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