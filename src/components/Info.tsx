import { Photo } from './Photo';

function Info() {
    return(
        <div className='info-layout'>
            <div className='title'>Портфоліо</div>
            <hr className='title-hr' />
            <Photo />
            <div style={{width: "calc(90% - 260px)"}}>
                <p>Мене звати Снігур Павло. Мені 19.</p>
                <p>Навчаюсь в КПІ на 2 курсі.</p>
                <p>Досвід роботи: фріланс (3 місяці).</p>
                <p>Рівень англійського: B1 (Intermediate).</p>
                <p>Цікавить Android та WEB-розробка. Також є досвід в багатьох інших мовах.</p>
                <p>Мій <a href='https://github.com/Lucky4rever' className='gradient-link'>GitHub
                </a>, <a href='https://github.com/' className='gradient-link'>Telegram</a>
                </p>
            </div>
        </div>
    )
}

export default Info;