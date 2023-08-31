import { useState, useEffect } from 'react'
import styles from './styles.module.css'
export default function Volume({volume_set}){
// Componente responsável pelo controle do volume

    let volume_counter = []
    let aux_volume = volume_set;
    const [volumeStatus, setVolumeStatus] = useState('')

    while (aux_volume > 0){
        volume_counter.push('*')
        aux_volume -= 1
    }
    // se o volume for 5 seta o status para maximo
    // se for 0 seta o status para muted
    // caso contrario nao faz nada
    useEffect(() => {

        if (volume_set > 0){
            setVolumeStatus('')
        } 
        if(volume_set === 5){
            setVolumeStatus('Max')
        } 
        if (volume_set === 0) {
            setVolumeStatus('muted')
        }
    }, [volume_counter])

    return(
        <div>
            <h2 className={styles.title}>Volume:</h2>
            <div className={styles.container}>
                <div className={styles.volume}>
                    {volume_counter.map((volume, index) => {
                        return(<span className={styles.volume_bar} key={index}></span>)
                    })}
                </div>
                {volumeStatus === 'muted' ? <img className={styles.muted_icon} src='/mute.png' alt='Volume está mutado'/> : <span className={styles.maxVolume}>{volumeStatus}</span>}
            </div>
        </div>
    )
}