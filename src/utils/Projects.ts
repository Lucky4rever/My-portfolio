export interface ProjectProps {
    key: number;
    img: any;
    link: string | undefined;
    description: string | "";
}

const MyProjects: ProjectProps[] = [
    {
        key: 1,
        img: require('../assets/img/projects/test_task_hello_Evano.png'), 
        link: 'https://lucky4rever.github.io/Test-task-Hello-Evano/',
        description: 'Проект на замовлення, зроблений Pixel-Perfect версткою.'
    },
    {
        key: 2,
        img: require('../assets/img/projects/three_ico_large-playstore.png'),
        link: undefined,
        description: 'Невеликий пет-проект, написаний на Kotlin.'
    }
];

export default MyProjects;