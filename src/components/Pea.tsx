const Color = [
    'rgb(184, 183, 255)',
    'rgb(255, 183, 183)',
    'rgb(255, 248, 183)',
    'rgb(189, 255, 183)',
    'rgb(183, 255, 251)'
]
const Face = [
    require('../assets/img/pea-smiles/winky.png'),
    require('../assets/img/pea-smiles/happy.png'),
    require('../assets/img/pea-smiles/scowly.png'),
    require('../assets/img/pea-smiles/bemused.png')
]

export interface PeaProps {
    key: number
}

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
            backgroundColor: Color[Math.floor(Math.random()*Color.length)],
            zIndex: Math.floor(Math.random()*60-30)
        }}>
            <img src={Face[Math.floor(Math.random()*Face.length)]} alt="" 
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