import { useState } from 'react'
import styles from './styles.module.css'
export default function Televisao(){
    const canais = ['/CANAL1.png', '/CANAL2.png', '/CANAL3.png' , '/CANAL4.png', '/CANAL5.png', '/CANAL6.png',
    '/CANAL7.png', '/CANAL8.png', '/CANAL9.png', '/CANAL10.png']
    const [channel, setChannel] = useState(canais[0])
    let last_channel = -1 

    return(
        <div className={styles.container}>
            <img src={channel} onClick={() => {setChannel(RandomizeChannel)}}/>
        </div>
    )


    function RandomizeChannel(){
        return canais[parseInt(Math.random() * 10)]
    }

}

