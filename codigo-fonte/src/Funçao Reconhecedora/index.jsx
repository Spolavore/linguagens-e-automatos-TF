import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import PalavraNodo from '../Palavra Nodo'
export default function ReconhecerLinguagem(){
    const [palavraEntrada, setPalavraEntrada] = useState()  // guarda a palavra escrita pelo usuario modo csv
    const [palavraModificada, setPalavraModificada] = useState()// guarda a palavra escrita pelo usuario modo csv
    const [doStep, setStep] = useState(0) // Contador de passos no modo Passo-a-Passo
    const [maxStep, setMaxStep] = useState() // Guardara o maximo de passos possíveis para a palavra escrita
    const [sequence, setSequence] = useState([]) // Sequencia de letras que ira ser apresentado na tela
    const [status, setStatus] = useState([]) // Status de cada uma das letras: se ela é aceita pela linguagem ou nao
    const [estadoAtualStep, setEstadoAtualStep] = useState('q0') // Guarda o estado atual do modo Passo-a-Passo (inicia em q0)
    const [statusOutPut, setStatusOutPut] = useState('') // guardara ACEITA, REJEITA ou FUNCAO INDEFINIDA

    // variavel conteundo o estilo do status
    // muda conforme a palavra for aceita ou nao
    var styleOutPutStatus
    if (statusOutPut === 'ACEITA'){
        styleOutPutStatus = {
            color: "green"
        }
    } else if(statusOutPut === 'REJEITA') {
        styleOutPutStatus = {
            color: "red"
        }      

        status[status.length] = 'rejeita'
    
    } else if(statusOutPut === 'FUNÇÃO INDEFINIDA'){
        styleOutPutStatus = {
            color: "red"
        }      

        status[status.length-1] = 'rejeita'
    }
    // Função responsável por particionar cada vez mais a palavra
    // no modo Passo-a-Passo, para que assim sempre se pegue a próxima
    // Letra
    useEffect(() => {
        if(doStep !== 0){
            let n = 1
            for(let i = 0; i < palavraModificada.length; i += 1){ 
                if (palavraModificada[i] !== ','){ 
                    n += 1
                } else {
                    break
                }
            }
            setPalavraModificada(old => old.slice(n))
        } 
    },[doStep])
    
    // Ao iniciar a opção passo-a-passo, seta o maximo de passos possíveis
    // == ao tamanho do alfabeto de entrada
    useEffect(() =>{
        if (doStep === 0){
            var aux = palavraEntrada?.split(',')
            setMaxStep(aux?.length - 1)
        }
    }, [palavraModificada])
    return(
       
        <div className={styles.mainContainer}>
            <h1>Reconhecer Linguagem</h1>
            <div className={styles.userInterface}>
                <div className={styles.box}>
                    <span>Escreva a palavra de Entrada</span>                                 {/*Parte responsável por resetar informações*/ }
                    <input placeholder='Ex: L,D,TC,AV,DV,D' onChange={(e)=> {setPalavraEntrada(e.target.value); setPalavraModificada(e.target.value); setStep(0); setStatus([]); setSequence([]); setEstadoAtualStep('q0'); setStatusOutPut('')}}></input>
                    <div className={styles.buttons}>
                        <button onClick={() => Fp(palavraEntrada)}>Rodar</button>
                        <button onClick={() => maxStep + 1 > doStep && statusOutPut === ''? Fp(palavraModificada,true) : null}>Passo</button>
                    </div>
                </div>
            <div className={styles.status}>
                <h3>Estado Atual: <span>{estadoAtualStep}</span></h3>
                <h3>Passos: <span>{doStep}</span></h3>
                <h3>Status: <span style={styleOutPutStatus}>{statusOutPut}</span></h3>
            </div>

            </div>
            <div className={styles.nodes}>
                {/* Printa os Nodos (letras da palavra de entrada inserida pelo usuário) */}
                {sequence.map((e,index) => {
                    return( <PalavraNodo palavra={e}  status={status[index]} key={index}/>)
                })}
           </div>
        </div>
    )


//Funcao programa que ira rodar recebendo a palavra de entrada
// e retornando se ela é aceita ou rejeitada na tela pro usuario
// se step == true entao significa que o modo Passo-a-Passo está
// ativado
function Fp(palavraEntrada,step=false){
    // Se a palavra vazia for passada, ou seja, a televisao esta desligada, pois o usuário nao fez nada
    // então aceita direto e retorna
    if (palavraEntrada === undefined || (doStep === 0 && palavraEntrada === '')){
        setStatusOutPut('ACEITA')
        setSequence([''])
        setStatus(oldStatus => [...oldStatus, 'aceita'])
        return
    }
   
    var alfabeto = palavraEntrada.split(',')  // divide a sequencia de entrada CSV, para pegar cada palavra especifica
    let estadoAtual
    let palavraAtual = alfabeto[0]  // pega a primeira palavra
    let i = 0 // auxiliar contador
    let words_read = []
    var invalid = false 

    

    // Se a opção escolhida foi o Passo-a-Passo
    // coloca a palavra atual para aparecer na tela
    // e aumenta o passo em 1 unidade
    if(step){
        estadoAtual = estadoAtualStep
        setSequence(oldSequence => [...oldSequence, palavraAtual])
        setStep(step => step += 1)
   
    } else {
        // seta o estado inicial (apenas para o modo rodar, no modo step o estado tem que ser salva
        // 'globalmente')
        estadoAtual = 'q0'   
    }
    
    
    
    // Parte de processamento da palavra de entrada
    // vai rodar enquanto o auxiliar i for menor que o tamanho do alfabeto
    // e enquanto a letra lida for valida
    while (i < alfabeto.length && !invalid){
        words_read.push(palavraAtual) // adiciona a palavra atual para a lista de palavras lidas
        
        // abaixo esta a implementacao da funcao programa utilizando switch cases
        // na parte de definicoes do trabalho da aplicacao há uma imagem mostrando
        // exatamento quais transicoes que esse codigo abaixo permite e quais ele
        // da funcao indefinida
        if (estadoAtual === 'q0'){
            switch (palavraAtual){

                case 'L': 
                    estadoAtual= 'q1'
                    break
                case 'D':
                    estadoAtual = 'q0'
                    break
                default:
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    setStatus(oldStatus => [...oldStatus, 'aceita'])
                    invalid = true
                    if(!step)
                        setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    setStatus(oldStatus => [...oldStatus, 'aceita'])
                    invalid = true
                    if(!step)
                        setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    setStatus(oldStatus => [...oldStatus, 'aceita'])
                    invalid = true
                    if(!step)
                    setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    status[status.length] = 'indefinido'
                    invalid = true
                    if(!step)
                    setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    setStatus(oldStatus => [...oldStatus, 'aceita'])
                    invalid = true
                    if(!step)
                    setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    setStatus(oldStatus => [...oldStatus, 'aceita'])
                    invalid = true
                    if(!step)
                    setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    status[status.length] = 'indefinido'
                    invalid = true
                    if(!step)
                    setSequence(words_read)
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
                    setStatusOutPut('FUNÇÃO INDEFINIDA')
                    status[status.length] = 'indefinido'
                    invalid = true
                    if(!step)
                        setSequence(words_read)
                    return
            }
        }
        


       

        // Se a opção Passo-a-Passo estiver ativa, então, já que não deu indefinida a palavra lida
        // supoe que ela é aceita, (mesmo que ela nao seja aceita, pois no final da função é feita)
        // a verificação final que pode ou não mudar esse status de aceita para rejeita
        if (step){
            setStatus(oldStatus => [...oldStatus, 'aceita'])
            setEstadoAtualStep(estadoAtual) // atualiza o estado atual do step
            break // sai do while pois só deve ser executado 1 vez no modo Passo-a-Passo
        } else {
            // Se o modo Rodar for escolhido incrementa o I e seta a palavra atual na lista de se-
            // quencias , e coloca o status para 'aceita'
            i = i + 1
            setStatus(oldStatus => [...oldStatus, 'aceita'])
            palavraAtual = alfabeto[i] // atualiza para a proxima palavra passada
    
        }

    }

    // Verificações finais (Fora do While)
    // Se o modo Rodar estiver ativo
    if (!step){
        // verifica se o I já foi saturado e se o estado de parada é diferente do q0
        setSequence(words_read)// printa palavras lidas
        if(i >= alfabeto.length && estadoAtual !== 'q0'){
            // se isso ocorrer rejeita, pois ele nao parou em um estado de aceitacao
            status[status.length] = 'rejeita'
            setStatusOutPut('REJEITA')

        
        } else if(i >= alfabeto.length && estadoAtual === 'q0'){
            // caso contrario aceita
            setStatus(oldStatus => [...oldStatus, 'aceita'])
            setStatusOutPut('ACEITA')

        }
    } else{
        // se o passo atual eh maior ou igual ao maximo de passos possiveis
        // e o estado atual for diferente de q0 entao rejeita
        if(doStep >= maxStep && estadoAtual !== 'q0' ){
            
            status[status.length] = 'rejeita'
            setStatusOutPut('REJEITA')

        } 
        // caso contrario rejeita
        if(doStep >= maxStep && estadoAtual === 'q0' ){
            setStatus(oldStatus => [...oldStatus, 'aceita'])
            setStatusOutPut('ACEITA')

        }
    }
}

}