'use client'
import styles from "./page.module.css";
import Login from "@/componentes/login";

import { useState } from "react";
import { useRouter } from "next/navigation";
import usuarios from "@/componentes/dados/logins";

export default function Home() {

  const router = useRouter();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

function retornarDado (nomeUsuario, senhaUsuario){
    let dadosUsuario = []; 

    usuarios.forEach((data) => {
      if((nomeUsuario === data.userName || nomeUsuario === data.email ) && senhaUsuario === data.password ){
        dadosUsuario.push(data);
      }
    })

    return dadosUsuario;
}


  const handleLogin = async (e) => {
    e.preventDefault()
    let dados = retornarDado(user, senha);

    if ((user === dados[0].userName || user === dados[0].email ) && senha === dados[0].password ) {
      localStorage.setItem('logado', true)
      localStorage.setItem('usuario', JSON.stringify(dados[0]))
      router.push('/prova')
      
    } else {
      setErro('Usuário ou senha incorretos');
      alert(erro);
    }
  }

  return (
    <main className={styles.container_principal}>
      <Login 
      funcao = {handleLogin}
      valueUser = {user}
      functionChangeUser = {(e) => setUser(e.target.value)}
      valuePassword = {senha}
      functionChangePassword = {(e) => setSenha(e.target.value)}
      />
    </main>
  );
}
