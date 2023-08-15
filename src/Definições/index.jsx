import styles from './styles.module.css'
const Definicoes = () =>{ 

    return(
    <div className={styles.mainContainer}>
        <h1>Definições do Trabalho:</h1>
        <div className={styles.definicoes}>
        
         <div className={styles.simbologiaBox}>
            <h2>Alfabeto de Entrada: </h2>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>L:</span> Ligar Televisão</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>D:</span> Desligar Televisão</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>M:</span> Mutar Televisão</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>TC:</span> Trocar de Canal</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV:</span> Aumentar Volume</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>DV:</span> Diminuir Volume</span>


        </div>

        <div className={styles.estadosBox}>
            <h2>Estados:</h2>
            <span className={styles.textDefault}><span className={styles.estados}>q0:</span> Estado Inicial e *Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>q1:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qA1:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qA2:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qA3:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qA4:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qA5:</span> Estado Não Final</span>
            <span className={styles.textDefault}><span className={styles.estados}>qM:</span> Estado Não Final</span>


        </div>

        <div className={styles.linguagemUtilizadaBox}>
            <h2>Linguagem Utilizada:</h2>
            <p>Foi utilizado React JS para a realização do trabalho, visto a facilitação da realização da interface.<br></br><br></br> Para a o autômato foi usado a biblioteca Cytoscape<br></br><br></br>Ademais, GitHub para o versionamento do código e Netlify para subir a aplicação na nuvem</p>
        </div>
        <div className={styles.transicoesBox}>
            <h2>Definicao Formal:</h2>
            <p>O cenário selecionado foi o manuseamento de uma televisão. Temos diversas possibilidades, como ligar e desligar a TV, o aumento e diminuição de volume (de 0 até 5), mutar o volume (retornando o volume até 0), e a troca de canais.
I Uma Gramática Linear é uma quádrupla (V, T, P, S), onde: I V é o conjunto finito de variáveis I T é o conjunto finito de símbolos terminais (alfabeto) I P é o conjunto finito de produções I S ∈ V é o símbolo inicial 
</p>
        </div>
        <div className={styles.transicoesBox}>
            <h2>Transições:</h2>
            
        </div>
        </div>

    </div>
    )
}





export default Definicoes;