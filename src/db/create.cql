create (pasha:Person{name: 'Снігур Павло', img: '../img/photo.jpg'})
set pasha.info = 'Мене звати Снігур Павло. Мені 19.'
set pasha.schedule = 'Навчаюсь в КПІ на 2 курсі.'
set pasha.experience = 'Досвід роботи: фріланс (3 місяці).'
set pasha.english = 'Рівень англійського: B1 (Intermediate).'
set pasha.interests = 'Цікавить Android та WEB-розробка. Також є досвід в багатьох інших мовах.'
set pasha.github = 'https://github.com/Lucky4rever'
set pasha.telegram = 'https://github.com/'

create (evano:Project{name: 'Evano', img: '../../img/projects/test_task_hello_Evano.png', link: 'https://lucky4rever.github.io/Test-task-Hello-Evano/', description: 'Проект на замовлення, зроблений Pixel-Perfect версткою.'})

create (pathofluckych:Project{name: 'Path of Luckych', img: '../../img/projects/three_ico_large-playstore.png', link: null, description: 'Невеликий пет-проект, написаний на Kotlin.'})

create (pasha)-[:CREATE_PROJECT]->(evano)
create (pasha)-[:CREATE_PROJECT]->(pathofluckych)