import { useEffect } from 'react';
import { MySkills } from '../utils'
import styled from 'styled-components';
import { Skill } from '../components';

const SkillsContainer = styled.div`
    position: relative;
    margin-top: 20px;
    height: 500px;
    max-width: 800px;
    aspect-ratio: 8/5;
    @media (max-width: 920px) {
        max-width: 100%;
        max-height: 350px;
    }
    @media (max-width: 650px) {
        max-height: 300px;
    }
    @media (max-width: 550px) {
        max-height: 250px;
    }
    @media (max-width: 460px) {
        max-height: 200px;
    }
    @media (max-width: 360px) {
        max-height: 150px;
    }
`;

export const Skills = () => {
    useEffect(() => {
        document.title = 'Навички';
    }, []);
      
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої навички</div>
            <hr className='title-hr' />
            <div style={{display: "flex", justifyContent: "center"}}>
                <SkillsContainer>
                    {MySkills.map(prop => {
                        return <Skill key={prop.key} name={prop.name} lvl={prop.lvl} img={prop.img} left={prop.left} top={prop.top} />
                    })}
                </SkillsContainer>
            </div>
        </div>
    )
};

export default Skills;