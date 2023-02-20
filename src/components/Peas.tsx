import React from 'react';
import styled from 'styled-components'
import _ from "lodash";

const Color = [
    'rgb(184, 183, 255)',
    'rgb(255, 183, 183)',
    'rgb(255, 248, 183)',
    'rgb(189, 255, 183)',
    'rgb(183, 255, 251)'
]
const Face = [
    require('../img/pea-smiles/winky.png'),
    require('../img/pea-smiles/happy.png'),
    require('../img/pea-smiles/scowly.png'),
    require('../img/pea-smiles/bemused.png'),
    require('../img/pea-smiles/headache.png')
]

const Pea = () => {
    let width = Math.random()*40 + 60
    let heigth = width
    let face_width = String(Math.random()*30+40)+'%'
    let face_heigth = face_width

    return (
        <div className='pea' style={{
            left: String(Math.random()*120-20)+'%', 
            top: String(Math.random()*120-20)+'%',
            width: width, 
            height: heigth, 
            backgroundColor: Color[Math.floor(Math.random()*Color.length)],
            zIndex: Math.floor(Math.random()*60-30)
        }}>
            <img src={Face[Math.floor(Math.random()*Face.length)]} alt="" style={{
                left: String(Math.random()*20+10)+'%', 
                top: String(Math.random()*20+10)+'%',
                width: face_width, 
                height: face_heigth
            }} />
        </div>
    )
}

export const PeasLayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 0;
`;

export const Peas = () => {
    var peas: string[] = [], i = 0;
    while (++i <= 50) peas.push("");

    return (
        <PeasLayout>
            {_.times(50, () => (
                <Pea />
            ))}
        </PeasLayout>
    );
}