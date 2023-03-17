import styled from 'styled-components'
import photo from '../assets/img/photo.jpg'

export const PhotoLayout = styled.div`
    position: absolute;
    width: 250px;
    height: 300px;
    left: calc(90% - 250px);
    top: -40px;

    background: #F5F5F5;
    border: 1px solid #000000;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    transform: rotate(3deg);

    user-select: text;

    > img {
        position: absolute;
        left: 25px;
        right: 25px;
        top: 25px;
      
        width: 200px;
        height: 200px;
      
        background: #000000;
        box-shadow: inset 0px 0px 10px #F5F5F5;
      
        z-index: 100;
        object-fit: cover;
    }

    > span {
        position: absolute;
        top: 79.54%;
        width: 100%;
        justify-content: center;
      
        font-family: 'Caveat';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        display: flex;
        align-items: center;
        text-align: center;
      
        color: #000000;
    }
    
    @media (max-width: 1200px) {
        left: calc(98% - 250px);
    }
    
    @media (max-width: 976px) {
        display: none;
    }
`;

const Photo = () => { 
    return (
        <PhotoLayout>
            <img src={photo} alt='' />
            <span>Снігур Павло</span>
        </PhotoLayout>
    )
};

export default Photo;