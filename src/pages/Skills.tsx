import { useEffect } from 'react';
import { Skills as AllSkills } from '../components/Skills'

export const Skills = () => {
    useEffect(() => {
        document.title = 'Навички';
    }, []);
      
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої навички</div>
            <hr className='title-hr' />
            <div style={{display: "flex", justifyContent: "center"}}>
                <AllSkills />
            </div>
        </div>
    )
};

export default Skills;