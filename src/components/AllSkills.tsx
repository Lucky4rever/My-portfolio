import { Skills as AllSkills } from './Skills'

export const Skills = () => {
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