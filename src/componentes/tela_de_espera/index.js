import styles from './style.module.css';

export default function TelaDeEspera (props){
    return(
        <main className={styles.container_principal}>
            <h1 className={styles.texto}>Sua prova esta agendada para o dia: {props.dia}</h1>
                <p>Sua prova iniciará em: {props.tempoRestante} </p>
        </main>
    )
}