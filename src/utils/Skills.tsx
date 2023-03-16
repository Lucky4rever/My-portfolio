export interface SkillProps {
    key: number;
    name: string;
    img: any;
    lvl: number;
    left: number;
    top: number;
}

const MySkills: SkillProps[] = [
    {
        key: 1,
        name: "Arduino",
        img: require('../assets/img/langs/arduino.png'),
        lvl: 1,
        left: 87,
        top: 39
    },
    {
        key: 2,
        name: "Android Studio",
        img: require('../assets/img/langs/AS.png'),
        lvl: 2,
        left: 60.5,
        top: 65
    },
    {
        key: 3,
        name: "XML",
        img: require('../assets/img/langs/xml.png'),
        lvl: 1,
        left: 20,
        top: 7.4
    },
    {
        key: 4,
        name: "C#",
        img: require('../assets/img/langs/Csharp.png'),
        lvl: 2,
        left: 45,
        top: 10
    },
    {
        key: 5,
        name: "C++",
        img: require('../assets/img/langs/Cplusplus.png'),
        lvl: 2,
        left: 73,
        top: 46.8
    },
    {
        key: 6,
        name: ".NET",
        img: require('../assets/img/langs/dotnet.png'),
        lvl: 1,
        left: 75.5,
        top: 7.4
    },
    {
        key: 7,
        name: "JS/TS React",
        img: require('../assets/img/langs/React.png'),
        lvl: 2,
        left: 30,
        top: 65
    },
    {
        key: 8,
        name: "HTML and CSS",
        img: require('../assets/img/langs/HTML-CSS.png'),
        lvl: 3,
        left: 31,
        top: 30
    },
    {
        key: 9,
        name: "JavaScript",
        img: require('../assets/img/langs/JS.png'),
        lvl: 2,
        left: 17,
        top: 46.8
    },
    {
        key: 10,
        name: "JetBrains IntelliJ IDEA",
        img: require('../assets/img/langs/JetBrains-IntelliJ-IDEA.png'),
        lvl: 1,
        left: 75.5,
        top: 70
    },
    {
        key: 11,
        name: "Kotlin Multiplatform Mobile",
        img: require('../assets/img/langs/kmm.png'),
        lvl: 1,
        left: 87,
        top: 18
    },
    {
        key: 12,
        name: "Kotlin",
        img: require('../assets/img/langs/Kotlin.png'),
        lvl: 3,
        left: 53,
        top: 30
    },
    {
        key: 13,
        name: "Microsoft SQL server",
        img: require('../assets/img/langs/MsSQL.png'),
        lvl: 2,
        left: 30,
        top: 5
    },
    {
        key: 14,
        name: "Neo4j",
        img: require('../assets/img/langs/Neo4j.jpg'),
        lvl: 1,
        left: 9,
        top: 18
    },
    {
        key: 15,
        name: "Node.js",
        img: require('../assets/img/langs/node.png'),
        lvl: 1,
        left: 19.75,
        top: 70
    },
    {
        key: 16,
        name: "Bootstrap",
        img: require('../assets/img/langs/Bootstrap.png'),
        lvl: 1,
        left: 10,
        top: 39
    },
    {
        key: 17,
        name: "SASS",
        img: require('../assets/img/langs/SASS.png'),
        lvl: 1,
        left: 9,
        top: 60
    },
    {
        key: 18,
        name: "Swift",
        img: require('../assets/img/langs/Swift.png'),
        lvl: 1,
        left: 87,
        top: 60
    },
    {
        key: 19,
        name: "TypeScript",
        img: require('../assets/img/langs/TS.png'),
        lvl: 2,
        left: 17,
        top: 22.6
    },
    {
        key: 20,
        name: "Visual Studio",
        img: require('../assets/img/langs/VS.png'),
        lvl: 2,
        left: 60.5,
        top: 5
    },
    {
        key: 21,
        name: "Visual Studio Code",
        img: require('../assets/img/langs/VSCode.png'),
        lvl: 2,
        left: 45,
        top: 62
    },
    {
        key: 22,
        name: "GIT",
        img: require('../assets/img/langs/Git.png'),
        lvl: 2,
        left: 73,
        top: 22.6
    },
];

export default MySkills;