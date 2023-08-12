import styles from './styles.module.css'
const Definicoes = () =>{ 

    return(
    <div className={styles.mainContainer}>
        <h1>Definições do Trabalho:</h1>
        <div className={styles.definicoes}>
        
         <div className={styles.simbologiaBox}>
            <h2>Alfabeto de Entrada: </h2>
            <span><span className={styles.alfabetoEntrada}>L:</span> Ligar Televisão</span>
            <span><span className={styles.alfabetoEntrada}>D:</span> Desligar Televisão</span>
            <span><span className={styles.alfabetoEntrada}>M:</span> Mutar Televisão</span>
            <span><span className={styles.alfabetoEntrada}>TC:</span> Trocar de Canal</span>
            <span><span className={styles.alfabetoEntrada}>AV:</span> Aumentar Volume</span>
            <span><span className={styles.alfabetoEntrada}>DV:</span> Diminuir Volume</span>


        </div>

        <div className={styles.definicaoFormalBox}>
            <h2>Definição Formal:</h2>
        </div>

        <div className={styles.linguagemUtilizadaBox}>
            <h2>Linguagem Utilizada:</h2>
            <p>Foi utilizado React JS para a realização do trabalho, visto a facilitação da realização da interface.<br></br><br></br> Para a o autômato foi usado a biblioteca Cytoscape<br></br><br></br>Ademais, GitHub para o versionamento do código e Netlify para subir a aplicação na nuvem</p>
        </div>
        </div>
    </div>
    )
}





export default Definicoes;