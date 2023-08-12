import styles from './styles.module.css'
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