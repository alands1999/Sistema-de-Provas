import styles from './style.module.css';
import Image from 'next/image';
import computerImg from '../../../public/8767132.jpg';

export default function Login (props){
    return(
        <section className={styles.container_login}>
            <div className={styles.container_imagem}>
                <Image className={styles.computer} src={computerImg} alt="computer" />
            </div>
            <form className={styles.formulario} onSubmit={props.funcao}>
                <h1 className={styles.titulo_form}>Login</h1>
                <input className={styles.input_user} type='text' placeholder='Usuário' value={props.valueUser} onChange={props.functionChangeUser}/>
                <input className={styles.input_password} type='password' placeholder='Senha' value={props.valuePassword} onChange={props.functionChangePassword}/>
                <button className={styles.botao} type='submit' >Login</button>
            </form>
        </section>
    )
}
