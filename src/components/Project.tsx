import styled from 'styled-components';

export interface ProjectProps {
    key: number;
    img: any;
    link: string | undefined;
    description: string | "";
}

const ProjectTyle = styled.div`
    box-sizing: border-box;
    width: calc(44% - 20px);
    border-radius: 15px;
    margin: 0 3% 20px;
    padding: 10px;

    transition: 0.3s;
    background-color: var(--block-background);
    outline: 1px solid var(--text-color);

    :hover {
        outline: 2px solid var(--text-color);
        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
        transform: translateY(-5px);
    }
    
    @media (max-width: 768px) {
        width: calc(100% - 20px);
    }
`;

const ProjectPreview = styled.div`
    display: flex;
    border-radius: 5px;
    width: 50%;
    hegth: 100%;

    align-items: center;
    justify-content: center;
    overflow: hidden;
    object-fit: contain;
    >div {
        width: max-content;
        hegth: 100%;
        >img {
            border-radius: 10px;
            hegth: max-content;
            width: 100%;
        }
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
        <ProjectTyle>
            <Reference href={props.link}>
                <ProjectPreview>
                    <div>
                        <img src={props.img === undefined ? 
                            require('../assets/img/something-went-wrong.png') : 
                            props.img} alt='' />
                    </div>
                </ProjectPreview>
                <ProjectDescription>
                    <span>
                        {props.description}
                        {props.link === undefined ? (<b>(Посилання відсутнє)</b>) : ''}
                    </span>
                </ProjectDescription>
            </Reference>
        </ProjectTyle>
    );
}

export default Project;