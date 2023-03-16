import { Achivement } from '../components';
import { MyAchivements } from '../utils';

const Achivements = () => {
    return (
        <div className='info-layout skills'>
            <div className='title'>Мої досягнення</div>
            <hr className='title-hr' />
            <div className='all-achivements'>
                {MyAchivements.map(achivement => {
                    return <Achivement key={achivement.key} img={achivement.img} link={achivement.link} description={achivement.description} />
                })}
            </div>
        </div>
    )
};

export default Achivements;