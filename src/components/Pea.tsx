import { PeaColor, PeaFace, PeaProps } from "../utils";


const Pea = ( props: PeaProps ) => {
    let key = props.key;

    let width = Math.random()*40 + 60
    let heigth = width
    let face_width = String(Math.random()*30+40)+'%'
    let face_heigth = face_width

    return (
        <div className='pea' key={key.toString()} style={{
            left: String(Math.random()*120-20)+'%', 
            top: String(Math.random()*120-20)+'%',
            width: width, 
            height: heigth, 
            backgroundColor: PeaColor[Math.floor(Math.random()*PeaColor.length)],
            zIndex: Math.floor(Math.random()*60-30)
        }}>
            <img src={PeaFace[Math.floor(Math.random()*PeaFace.length)]} alt="" 
            key={key.toString()} style={{
                left: String(Math.random()*20+10)+'%', 
                top: String(Math.random()*20+10)+'%',
                width: face_width, 
                height: face_heigth
            }} />
        </div>
    )
}

export default Pea;