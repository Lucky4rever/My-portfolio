import { useEffect, useState } from 'react';
import { Achivement } from '../components';
import { AchivementProps, Language } from '../utils';

const Achivements = () => {
    let [achivements, setAahivements] = useState<AchivementProps[]>();
    const fillAllAchivements = async() => {
        const AllAchivements = await require("../db/achivements.json");
        setAahivements(AllAchivements.children);
    }
    useEffect(() => {
        document.title = Language.content['achivements-name'];

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
            <div className='title'>{Language.content['my-achivements']}</div>
            <hr className='title-hr' />
            <div className='all-achivements'>
                {achivements === undefined ? <div>{Language.content['loading']}</div> : achivements?.length === 0 ? <div>{Language.content['there-is-nothing']}</div> : 
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