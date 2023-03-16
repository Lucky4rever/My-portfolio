export interface AchivementProps {
    key: number;
    img: any;
    link: string | undefined;
    description: string | "";
}

const Achivements: AchivementProps[] = [
    {
        key: 1,
        img: require('../assets/img/achivements/INT20H-2023.png'), 
        link: undefined,
        description: 'Друге місце на хакатоні INT20H в 2023 році у категорії "WEB Developement" у складі команди LuckyDev.'
    }
];

export default Achivements;