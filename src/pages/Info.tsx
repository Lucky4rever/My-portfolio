import { useEffect } from 'react';
import styled from 'styled-components';
import { Photo } from '../components';
import { Language } from "../utils";

const InfoLine = styled.p`
    font-size: 30px;
    display: block;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

function Info() {
    useEffect(() => {
        document.title = Language.content['home-name'];
    }, []);

    return(
        <div className='info-layout with-photo'>
            <div className='title'>{Language.content['home-name']}</div>
            <hr className='title-hr' />
            <div>
                <Photo />
                <InfoLine>{Language.content['short-info']}</InfoLine>
                <InfoLine>{Language.content['shchedule']}</InfoLine>
                <InfoLine>{Language.content['experience']}</InfoLine>
                <InfoLine>{Language.content['english-level']}</InfoLine>
                <InfoLine>{Language.content['interests']}</InfoLine>
                <InfoLine>{Language.content['links-start']} <a href='https://github.com/Lucky4rever' className='gradient-link'>GitHub
                </a>, <a href='https://t.me/Lackych' className='gradient-link'>Telegram</a>
                </InfoLine>
            </div>
        </div>
    )
}

export default Info;