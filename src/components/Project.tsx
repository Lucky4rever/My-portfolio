import React from 'react';
import styled from 'styled-components';

export default class ProjectProps {
    img: any;
    link: string | undefined;
    description: string = "";
    constructor (img: string, link: string | undefined, description: string) {
        this.img = img;
        this.link = link;
        this.description = description;
    }
}

const ProjectTyle = styled.div`
    width: calc(44% - 20px);
    border-radius: 15px;
    margin: 0 3% 20px;
    padding: 10px;

    transition: 0.3s;
    background-color: var(--block-background);
    outline: 1px solid var(--text-color);
    > a {
        display: inline-flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
    :hover {
        outline: 2px solid var(--text-color);
        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
        transform: translateY(-5px);
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
    }
`;

const Reference = styled.a`
    text-decoration: inherit;
`;

export const Project = (props: ProjectProps) => {
    return (
        <ProjectTyle>
            <Reference href={props.link}>
                <ProjectPreview>
                    <div>
                        <img src={props.img === undefined ? 
                            require('../img/something-went-wrong.png') : 
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