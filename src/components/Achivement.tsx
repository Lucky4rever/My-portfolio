import styled from 'styled-components';
import { AchivementProps, Language } from '../utils';

const AchivementTyle = styled.div`
    box-sizing: border-box;
    width: 94%;
    border-radius: 15px;
    margin: 0 3% 20px;
    padding: 10px;

    transition: 0.3s;
    background-color: var(--block-background);
    outline: 1px solid var(--text-color);
`;

const AchivementPreview = styled.div`
    display: flex;
    border-radius: 5px;
    width: fit-content;
    height: 100%;

    align-items: center;
    justify-content: center;
    overflow: hidden;
    object-fit: contain;
    >div {
        width: max-content;
        height: 100%;
        >img {
            border-radius: 10px;
            width: 100%;
            max-width: 40vw;
            max-height: 300px;
        }
    }
`;

const AchivementDescription = styled.div`
    width: max-content;
    text-decoration: inherit;
    display: flex;
    vertical-align: middle;
    > span {
        display: block;
        height: 100%;
        padding: 3%;
        margin auto 0;
        overflow: hidden;
        
        @media (min-width: 520px) and (max-width: 768px) {
            font-size: 20px;
        }
    }
`;

const Reference = styled.a`
    display: inline-flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    text-decoration: none;

    @media (max-width: 768px) {
        flex-direction: column;
        > div {
            width: 100% !important;
        }
    }
`;

const Achivement = (props: AchivementProps) => {
    return (
        <AchivementTyle className={props.link === null ? "" : "hoverable"}>
            <Reference href={props.link ?? undefined}>
                <AchivementPreview>
                    <div>
                        <img src={props.img} alt='' />
                    </div>
                </AchivementPreview>
                <AchivementDescription>
                    <span>
                        {props.description[Language.name]}
                        {props.link === null ? (<b>({Language.content['missing-link']})</b>) : ''}
                    </span>
                </AchivementDescription>
            </Reference>
        </AchivementTyle>
    );
}

export default Achivement;