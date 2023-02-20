import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Skill from './Skill.tsx';

const SkillsContainer = styled.div`
    position: relative;
    margin-top: 20px;
    height: 500px;
    max-width: 800px;
    aspect-ratio: 8/5;
`;

export const Skills = () => {
    return (
        <SkillsContainer>
            <Skill name="Arduino" img={require('../img/langs/arduino.png')} lvl={1} left={87} top={39} />

            <Skill name="Android Studio" img={require('../img/langs/AS.png')} lvl={2} left={60.5} top={65} />

            <Skill name="Bootstrap" img={require('../img/langs/Bootstrap.png')} lvl={1} left={20} top={7.4} />

            <Skill name="C#" img={require('../img/langs/Csharp.png')} lvl={2} left={45} top={10} />

            <Skill name="C++" img={require('../img/langs/Cplusplus.png')} lvl={2} left={73} top={46.8} />

            <Skill name=".NET" img={require('../img/langs/dotnet.png')} lvl={1} left={75.5} top={7.4} />

            <Skill name="GIT" img={require('../img/langs/Git.png')} lvl={2} left={30} top={65} />

            <Skill name="HTML and CSS" img={require('../img/langs/HTML-CSS.png')} lvl={3} left={31} top={30} />

            <Skill name="JavaScript" img={require('../img/langs/JS.png')} lvl={2} left={17} top={46.8} />

            <Skill name="JetBrains IntelliJ IDEA" img={require('../img/langs/JetBrains-IntelliJ-IDEA.png')} lvl={1} left={75.5} top={70} />

            <Skill name="Kotlin Multiplatform Mobile" img={require('../img/langs/kmm.png')} lvl={1} left={87} top={18} />

            <Skill name="Kotlin" img={require('../img/langs/Kotlin.png')} lvl={3} left={53} top={30} />

            <Skill name="Microsoft SQL server" img={require('../img/langs/MsSQL.png')} lvl={2} left={30} top={5} />

            <Skill name="Neo4j" img={require('../img/langs/Neo4j.jpg')} lvl={1} left={9} top={18} />

            <Skill name="Node.js" img={require('../img/langs/node.png')} lvl={1} left={19.75} top={70} />

            <Skill name="JS/TS React" img={require('../img/langs/React.png')} lvl={1} left={10} top={39} />

            <Skill name="SASS" img={require('../img/langs/SASS.png')} lvl={1} left={9} top={60} />

            <Skill name="Swift" img={require('../img/langs/Swift.png')} lvl={1} left={87} top={60} />
            
            <Skill name="TypeScript" img={require('../img/langs/TS.png')} lvl={2} left={17} top={22.6} />

            <Skill name="Visual Studio" img={require('../img/langs/VS.png')} lvl={2} left={60.5} top={5} />

            <Skill name="Visual Studio Code" img={require('../img/langs/VSCode.png')} lvl={2} left={45} top={62} />

            <Skill name="XML" img={require('../img/langs/xml.png')} lvl={2} left={73} top={22.6} />
        </SkillsContainer>
    )
}