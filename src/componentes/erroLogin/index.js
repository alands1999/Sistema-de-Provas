import styles from './style.module.css';

export default function ErroLogin({ estilo }) {
  return (
    <div className={styles.container_principal + " " + (estilo.includes("visible") ? styles.visible : styles.hidden)}>
      <p className={styles.titulo}>Usuário ou senha incorretos.</p>
    </div>
  );
}