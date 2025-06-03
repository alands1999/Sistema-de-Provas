import styles from './style.module.css';

export default function TelaTimeOut (props){
    return(
        <main className={styles.container_principal}>
            <h1 className={styles.texto}>Sua prova estava agendada para o dia: {props.dia}</h1>
                <p>O tempo se esgotou! </p>
        </main>
    )
}