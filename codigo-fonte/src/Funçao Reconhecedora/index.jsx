import styles from './styles.module.css'
import { useState } from 'react'
export default function ReconhecerLinguagem(){
    const [palavraEntrada, setPalavraEntrada] = useState()
    return(

        <div className={styles.mainContainer}>
            <h1>Reconhecer Linguagem</h1>
            <div className={styles.userInterface}>
                <div className={styles.box}>
                    <span>Escreva a palavra de Entrada</span>
                    <input placeholder='Ex: L,D,TC,AV,DV,D' onChange={(e)=> setPalavraEntrada(e.target.value)}></input>
                    <div className={styles.buttons}>
                        <button onClick={() => Fp(palavraEntrada)}>Rodar</button>
                        <button>Passo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Fp(palavraEntrada){
    if (!palavraEntrada){
        alert('aceita')
        return
    }
    var alfabeto = palavraEntrada.split(',')
    let estadoAtual = 'q0'
    let palavraAtual = alfabeto[0]
    let i = 0

    while (i != alfabeto.length){

        if (estadoAtual === 'q0'){
            switch (palavraAtual){
                case 'L': 
                    estadoAtual= 'q1'
                    i += 1
                    palavraAtual = palavraAtual[i]
                case 'D':
                    estadoAtual = 'q0'
                    i += 1
                    palavraAtual = palavraAtual[i]
          
                default:
                    alert('Errou seu burro')
            }
        }

        if(estadoAtual === 'q1'){
            switch(palavraAtual){
                case 'AV':
                    estadoAtual= 'qA1'
                    i += 1
                    palavraAtual = palavraAtual[i]
                case 'TC':
                    estadoAtual='q1'
                    i += 1
                    palavraAtual = palavraAtual[i]
                case 'D':
                    estadoAtual='q0'
                    i += 1
                    palavraAtual = palavraAtual[i]
                case 'M':
                    estadoAtual='qM'
                    i += 1
                    palavraAtual = palavraAtual[i]
            }
        }
            
    }
   
}