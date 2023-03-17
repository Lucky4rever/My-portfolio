import { useEffect, useState } from 'react';
import { Achivement } from '../components';
import { AchivementProps } from '../utils';

const Achivements = () => {
    let [achivements, setAahivements] = useState<AchivementProps[]>();
    const fillAllAchivements = async() => {
        const AllAchivements = await require("../db/achivements.json");
        setAahivements(AllAchivements.children);
    }
    useEffect(() => {
        document.title = 'Досягнення';

        const fillAchivements = async() => {
            try {
                fillAllAchivements();
            } catch (e) {
                console.error(e);
            }
        }
        fillAchivements();
    }, []);
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої досягнення</div>
            <hr className='title-hr' />
            <div className='all-achivements'>
                {achivements === undefined ? <div>Loading...</div> : achivements?.length === 0 ? <div>There is nothing</div> : 
                achivements.map((achivement: AchivementProps, key: number) => {
                    return <Achivement 
                        key={key} 
                        img={achivement.img} 
                        link={achivement.link} 
                        description={achivement.description} />
                })}
            </div>
        </div>
    )
};

export default Achivements;