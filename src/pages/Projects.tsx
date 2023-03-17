import { useEffect, useState } from 'react';
import { Project } from '../components';
import { ProjectProps } from '../utils';

const Projects = () => {
    let [projects, setProjects] = useState<ProjectProps[]>();
    const fillAllProjects = async() => {
        const AllProjects = await require("../db/projects.json");
        setProjects(AllProjects.children);
    }
    useEffect(() => {
        document.title = 'Проекти';
        
        const fillProjects = async() => {
            try {
                fillAllProjects();
            } catch (e) {
                console.error(e);
            }
        }
        fillProjects();
    }, []);
    
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої проекти</div>
            <hr className='title-hr' />
            <div className='all-projects'>
                {projects === undefined ? <div>Loading...</div> : projects?.length === 0 ? <div>There is nothing</div> : 
                projects.map((project: ProjectProps, key: number) => {
                    return <Project 
                        key={key} 
                        img={project.img} 
                        link={project.link} 
                        description={project.description} />
                })}
            </div>
        </div>
    )
};

export default Projects;