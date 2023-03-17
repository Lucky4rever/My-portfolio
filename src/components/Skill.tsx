import React from 'react';
import styled from 'styled-components';
import { type SkillProps } from '../utils';

class Lvl {
    size: number;
    fontSize: number;
    constructor(size: number, fontSize: number) {
        this.size = size;
        this.fontSize = fontSize;
    }
}
export class Layout {
    top: number;
    left: number;
    constructor(top: number, left: number) {
        this.top = top;
        this.left = left;
    }
}
    
const knowledgeLvls = new Array<Lvl>(
    new Lvl(60, 8),
    new Lvl(100, 16),
    new Lvl(150, 24)
);

const Coin = styled.div`
    display: inline-flex;
    position: absolute;
    border-radius: 50%;
    aspect-ratio: 1 / 1 !important;
    
	transition: 0.7s transform ease;
	transform-style: preserve-3d;
    :hover {
        transform: rotateY(180deg);
    }

    background: #FFFFFF;
    outline: 2px solid var(--text-color);
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        object-fit: cover;
	    backface-visibility: hidden;
    }
    > div {
        display: block;
        width: 100%;
        margin: auto;

        justify-content: center;
        text-align: center;
        transform: rotateY(180deg);
        font-size: 100%;
        backface-visibility: hidden;
        color: #000000;

    }
    @media (max-width: 768px) {
        outline: 1px solid var(--text-color);
        > div {
            font-size: 50%;
        }
    }
`;

export default class Skill extends React.Component<SkillProps> {
    name: string = "";
    img: any | null = null;
    lvl: Lvl | null = null;
    layout: Layout = new Layout(0, 0);
    constructor(props: SkillProps) {
        super(props);
        this.name = props.name;
        this.img = props.img;
        this.lvl = knowledgeLvls[props.lvl-1]
        this.layout.left = props.left
        this.layout.top = props.top
    };
    render() {
        return (
            <Coin style={{
                width: String(this.lvl?.size! / 8)+'%',
                height: "fit-content",
                // maxHeight: String(this.lvl?.size! / 5)+'%',
                fontSize: this.lvl?.fontSize,
                left: String(this.layout?.left)+'%',
                top: String(this.layout?.top)+'%'
            }}>
                <img src={this.img} alt={this.name} />
                <div>{this.name}</div>
            </Coin>
        );
    }
}