import styles from './styles.module.css'
import { useState, useEffect } from 'react'
export default function ReconhecerLinguagem(){
    const [palavraEntrada, setPalavraEntrada] = useState()
    const [palavraModificada, setPalavraModificada] = useState()
    const [doStep, setStep] = useState(0)
    const [maxStep, setMaxStep] = useState(1)
    useEffect(() => {
        if(doStep != 0){
            setPalavraModificada(old => old.slice(2))
        }
    },[doStep])
    return(
       
        <div className={styles.mainContainer}>
             {doStep}, {maxStep}
             {palavraModificada}
            <h1>Reconhecer Linguagem</h1>
            <div className={styles.userInterface}>
                <div className={styles.box}>
                    <span>Escreva a palavra de Entrada</span>
                    <input placeholder='Ex: L,D,TC,AV,DV,D' onChange={(e)=> {setPalavraEntrada(e.target.value); setPalavraModificada(e.target.value); setStep(0)}}></input>
                    <div className={styles.buttons}>
                        <button onClick={() => Fp(palavraEntrada)}>Rodar</button>
                        <button onClick={()=>Fp(palavraModificada,true)}>Passo</button>
                    </div>
                </div>
            </div>
        </div>
    )



function Fp(palavraEntrada,step=false){
    alert(palavraEntrada)
    if (!palavraEntrada){
        alert('aceita')
        return
    }
   
    var alfabeto = palavraEntrada.split(',')
    let estadoAtual = 'q0'
    let palavraAtual = alfabeto[0]
    let i = 0
    var invalid = false

    if(doStep === 0){
      
        setMaxStep(alfabeto.length)

    }

    if(step){
        setStep(step => step += 1)
    }
    
    

    while (i < alfabeto.length && !invalid){

        if (estadoAtual === 'q0'){
            switch (palavraAtual){
                case 'L': 
                    estadoAtual= 'q1'
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }

        else if(estadoAtual === 'q1'){
            switch(palavraAtual){
                case 'AV':
                    estadoAtual= 'qA1'
                    break
                case 'DV':
                    estadoAtual = 'q1'
                    break
                case 'TC':
                    estadoAtual='q1'
                    break
                case 'D':
                    estadoAtual= 'q0'
                    break
                case 'M':
                    estadoAtual='qM'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return                
            }
        }
        else if(estadoAtual === 'qA1'){
            switch(palavraAtual){
                case 'TC':
                    estadoAtual = 'qA1'
                    break
                case 'M':
                    estadoAtual = 'qM' 
                    break
                case 'AV':
                    estadoAtual = 'qA2' 
                    break  
                case 'DV':
                    estadoAtual = 'q1'
                    break
                case 'D':
                    estadoAtual='q0'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
       else if(estadoAtual === 'qA2'){
            switch(palavraAtual){
                case 'TC':
                    estadoAtual = 'qA2'  
                    break  
                case 'M':
                    estadoAtual = 'qM'  
                    break
                case 'AV':
                    estadoAtual = 'qA3'   
                    break   
                case 'DV':
                    estadoAtual = 'qA1'  
                    break   
                case 'D':
                    estadoAtual = 'q0' 
                    break            
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
       else if(estadoAtual === 'qA3'){
            switch(palavraAtual){
                case 'TC':
                    estadoAtual = 'qA3'    
                    break
                case 'D':
                    estadoAtual = 'q0'    
                    break
                case 'DV':
                    estadoAtual = 'qA2'
                    break      
                case 'AV':
                    estadoAtual = 'qA4'
                    break
                case 'M':
                    estadoAtual = 'qM'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
        else if(estadoAtual === 'qA4'){

            switch(palavraAtual){
                case 'TC':
                    estadoAtual = 'qA4'
                    break
                case 'AV':
                    estadoAtual = 'qA5'
                    break
                case 'DV':
                    estadoAtual = 'qA3'
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                case 'M':
                    estadoAtual = 'qM'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
        else if(estadoAtual === 'qA5'){

            switch(palavraAtual){
                case 'TC':
                    estadoAtual = 'qA5'
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                case 'AV':
                    estadoAtual = 'qA5'
                    break
                case 'DV':
                    estadoAtual = 'qA4' 
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                case 'M':
                    estadoAtual = 'qM'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
        else if(estadoAtual === 'qM'){

            switch(palavraAtual){
                case 'DV':
                    estadoAtual = 'qM' 
                    break
                case 'M':
                    estadoAtual = 'qM'
                    break
                case 'TC':
                    estadoAtual = 'qM'
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                case 'AV':
                    estadoAtual = 'qA1'
                    break
                default:
                    alert('Rejeita, Indefinido')
                    return
            }
        }
      
        if (step){
            break
        } 
        i = i + 1
        palavraAtual = alfabeto[i]

    }

    if (!step){
        if(i >= alfabeto.length && estadoAtual !== 'q0'){
            alert('Rejeita')
        } else{
            alert('Aceita')
        }
    } else{
       alert(doStep)
        if(doStep === maxStep  && estadoAtual !== 'q0'){
            alert('Rejeita')
        } else if(doStep === maxStep  && estadoAtual === 'q0'){
            alert('Aceita')
        }
    }




}


}