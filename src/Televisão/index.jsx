import { useEffect, useState } from 'react'
import styles from './styles.module.css'
export default function Televisao({change_channel}){
    const canais = ['/CANAL1.png', '/CANAL2.png', '/CANAL3.png' , '/CANAL4.png', '/CANAL5.png', '/CANAL6.png',
    '/CANAL7.png', '/CANAL8.png', '/CANAL9.png', '/CANAL10.png']
    const [channel, setChannel] = useState(canais[0])
    let last_channel = -1

    useEffect(() =>{
        if(change_channel === 0){
            setChannel('/CANALDESLIGADA.png')
        } else{
            setChannel(RandomizeChannel)
        }
    },[change_channel])
    return(
        <div className={styles.container}>
            <img src={channel} onClick={() => {setChannel(RandomizeChannel)}}/>
        </div>
    )


    function RandomizeChannel(){
        let new_channel = canais[parseInt(Math.random() * 10)]
        while(new_channel === last_channel){
            new_channel = canais[parseInt(Math.random() * 10)]
        }
        return new_channel
    }

}

