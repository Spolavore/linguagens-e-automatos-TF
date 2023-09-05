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
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV:</span> Aumenta o Volume em 1 unidade</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV2:</span> Aumenta o Volume em 2 unidades</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV3:</span> Aumenta o Volume em 3 unidades</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV4:</span> Aumenta o Volume em 4 unidades</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>AV5:</span> Aumenta o Volume em 5 unidades</span>
            <span className={styles.textDefault}><span className={styles.alfabetoEntrada}>DV:</span> Diminui o Volume em 1 unidade</span>


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
            <p>Nosso autômato pode ser formalmente definido como:
TV = ([L, D, M, TC, AV, AV2, AV3, AV4, AV5, DV], [q0, q1, qA1, qA2, qA3, qA4, qA5, qM], Tabela de Transições, q0, [q0])</p>
        </div>
        </div>

    </div>
    )
}





export default Definicoes;