'use client'
import styles from "./page.module.css";
import Login from "@/componentes/login";

import { useState } from "react";
import { useRouter } from "next/navigation";
import usuarios from "@/componentes/dados/logins";
import ErroLogin from "@/componentes/erroLogin";

export default function Home() {

  const router = useRouter();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);

function retornarDado (nomeUsuario, senhaUsuario){
    let dadosUsuario = []; 

    usuarios.forEach((data) => {
      if((nomeUsuario === data.userName || nomeUsuario === data.email ) && senhaUsuario === data.password ){
        dadosUsuario.push(data);
      } else {
        dadosUsuario.push("Invalido");
      }
    })

    return dadosUsuario[0];
}


  const handleLogin = async (e) => {
    e.preventDefault()
    let dados = retornarDado(user, senha);

    if ((user === dados.userName || user === dados.email ) && senha === dados.password ) {
      localStorage.setItem('logado', true)
      localStorage.setItem('usuario', JSON.stringify(dados));
      router.push('/prova')
      
    } else {
        setErro(true);

        setTimeout(() => {
        setErro(false);
        }, 2000);
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

      <ErroLogin estilo={`container_principal ${erro ? "visible" : "hidden"}`} />
      
    </main>
  );
}
