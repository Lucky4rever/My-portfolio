import { useEffect } from 'react';
import styled from 'styled-components';
import { Photo } from '../components/Photo';

const InfoLine = styled.p`
    font-size: 30px;
    display: block;
`;

function Info() {
    useEffect(() => {
        document.title = 'Портфоліо';
    }, []);

    return(
        <div className='info-layout with-photo'>
            <div className='title'>Портфоліо</div>
            <hr className='title-hr' />
            <div>
                <Photo />
                <InfoLine>Мене звати Снігур Павло. Мені 19.</InfoLine>
                <InfoLine>Навчаюсь в КПІ на 2 курсі.</InfoLine>
                <InfoLine>Досвід роботи: фріланс (3 місяці).</InfoLine>
                <InfoLine>Рівень англійського: B1 (Intermediate).</InfoLine>
                <InfoLine>Цікавить Android та WEB-розробка. Також є досвід в багатьох інших мовах.</InfoLine>
                <InfoLine>Мій <a href='https://github.com/Lucky4rever' className='gradient-link'>GitHub
                </a>, <a href='https://t.me/Lackych' className='gradient-link'>Telegram</a>
                </InfoLine>
            </div>
        </div>
    )
}

export default Info;