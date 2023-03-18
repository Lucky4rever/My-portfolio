import styled from 'styled-components';
import { Language, ProjectProps } from '../utils';

const ProjectTyle = styled.div`
    box-sizing: border-box;
    width: calc(44% - 20px);
    border-radius: 15px;
    margin: 0 3% 20px;
    padding: 10px;

    transition: 0.3s;
    background-color: var(--block-background);
    outline: 1px solid var(--text-color);
    
    @media (max-width: 768px) {
        width: calc(100% - 20px);
    }
`;

const ProjectPreview = styled.div`
    display: flex;
    border-radius: 5px;
    width: fit-content;
    max-width: 50%;

    align-items: center;
    justify-content: center;
    overflow: hidden;
    object-fit: contain;
    >div {
        heght: 100%;
        >img {
            border-radius: 10px;
            max-heght: 300px;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const ProjectDescription = styled.div`
    width: 50%;
    text-decoration: inherit;
    display: flex;
    vertical-align: middle;
    > span {
        display: block;
        height: fit-content;
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

const Project = (props: ProjectProps) => {
    return (
        <ProjectTyle className={props.link === null ? "" : "hoverable"}>
            <Reference href={props.link ?? undefined}>
                <ProjectPreview>
                    <div>
                        <img src={props.img} alt='' />
                    </div>
                </ProjectPreview>
                <ProjectDescription>
                    <span>
                        {props.description}
                        {props.link === null ? (<b>({Language.content['missing-link']})</b>) : ''}
                    </span>
                </ProjectDescription>
            </Reference>
        </ProjectTyle>
    );
}

export default Project;