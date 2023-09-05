import styles from './styles.module.css'
// Componente responsavel por mostrar palavra por palavra 
// colocando uma cor verde na palavra que esta de acordo com o
// alfabeto de entrada e vermelho caso contrario

// Recebe como parametro da funcao se o status da palavra
// eh aceita, rejeita ou indefinido
const PalavraNodo = (props) => {
    
    const style_rejeita = {
        color: "red",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "5%"
        
    }

    const style_aceita={
        color: "green",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "5%"
    }
    
    return(
    <div className={styles.mainContainer}>
        <div className={props.status === 'rejeita' || props.status === 'indefinido' ? styles.nodeRejeita : styles.nodeAceita}>
            <span>{props.palavra}</span>
        </div>
        {props.status === 'indefinido' || props.status === 'rejeita' ? <span style={style_rejeita}>X</span> : <span style={style_aceita}>OK</span> }
        
    </div>
    )
}



export default PalavraNodo