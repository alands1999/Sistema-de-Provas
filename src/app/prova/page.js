'use client'

import styles from './style.module.css';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';

import PainelPerguntas from '@/componentes/Perguntas';
import TelaDeEspera from '@/componentes/tela_de_espera';
import {sortearPerguntas, perguntasOriginais} from '@/componentes/dados/dados';


export default function Prova (){

    const router = useRouter();
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    const [perguntas, setPerguntas] = useState([]);
    const [atual, setAtual] = useState(0);
    const [respostas, setrespostas] = useState([]);
    const [resultadoFinal, setResultadoFinal] = useState(null);
    const [mostrasResultado, setMostrarResultado] = useState(false);
    const [telaEnviar, setTelaEnviar] = useState(false);
    const [telaEspera, setTelaEspera] = useState(false);
    const [tempoRestante, setTempoRestante] = useState(0);
    

    let dataAtual = new Date();
    let dataDaProva = new Date(usuario.dataDaProva);
    let limiteProva = new Date(dataDaProva.getTime() + 2 * 60 * 60 * 1000);
    const diferencaMs = dataDaProva.getTime() - dataAtual.getTime();

    
        useEffect(() => {
            
            const usuario = JSON.parse(localStorage.getItem('usuario'));

            if (!usuario || !usuario.dataDaProva) return;
            

            const dataDaProva = new Date(usuario.dataDaProva);

            const interval = setInterval(() => {
                const agora = new Date();
                const diferencaMs = dataDaProva.getTime() - agora.getTime();
                let limiteProva = new Date(dataDaProva.getTime() + 2 * 60 * 60 * 1000);

                if (agora <= limiteProva && agora >= dataDaProva) {
                    clearInterval(interval);
                    setTempoRestante(0);
                    setTelaEspera(true); // Sai da tela de espera
                } else if (diferencaMs > 0) {
                    setTempoRestante(diferencaMs);
                } else {
                    clearInterval(interval);
                    setTelaEspera(false);
                }
            }, 1000);

            return () => clearInterval(interval); // limpeza do intervalo
            }, []);

    useEffect (() => {
        const logado = localStorage.getItem('logado');
        if (!logado) {
            router.push('/')
        }
    }, [])
    
    //sortear as 20 perguntas:
    useEffect(() => {
        const sorteadas = sortearPerguntas(perguntasOriginais);
        setPerguntas(sorteadas);
        liberarProva();
    },[]);

    if (perguntas.length === 0) return <p>Carregando perguntas ...</p>

    const pergunta = perguntas[atual];
    const respostaSelecionada = respostas.find(r => r.id === pergunta.id)?.texto || "";

    function marcarResposta(idPergunta, textoAlternativa) {
  setrespostas(prev => {
    const outras = prev.filter(r => r.id !== idPergunta);
    return [...outras, { id: idPergunta, texto: textoAlternativa }];
  });
}

    //calcular resultado
    function calcularResultado (){
        let corretas = 0;
        let perguntasErradas = [];

        perguntas.forEach( (pergunta) =>{
            const respostaUser = respostas.find(r => r.id === pergunta.id)?.texto;
            const alternativaCorreta = pergunta.alternativas.find((alt) => alt.correta === true);
            

            if (respostaUser === alternativaCorreta.texto){
                corretas += 1;
            } else {
                perguntasErradas.push({
                    pergunta: pergunta.pergunta,
                    respostaEscolhida: respostaUser,
                });
            }
        });
        console.log(perguntas)

    const total = perguntas.length;
    const porcentagem = (corretas / total) * 100;
    const aprovado = porcentagem >= 70;


    return {
        corretas,
        incorretas: total - corretas,
        porcentagem,
        aprovado,
        perguntasErradas,
    };
    }

    //Botão enviar
    function enviar (){
        const resultado = calcularResultado();
        setResultadoFinal(resultado);
        setMostrarResultado(true); // muda a tela
        setTelaEnviar(true);
        
    }

    //verifica o horário da prova
    function liberarProva(){
        if (dataAtual >= dataDaProva && dataAtual < limiteProva){
            setTelaEspera(true);
        } 
    }

    //calcula tempo restante para a prova
    function formatarTempo(ms) {
        const totalSegundos = Math.floor(ms / 1000);
        const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, '0');
        const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, '0');
        const segundos = String(totalSegundos % 60).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
        }

    if (!telaEspera) {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        const dataDaProva = new Date(usuario.dataDaProva);

        return (
            <main className={styles.container_principal}>
            <TelaDeEspera 
                dia={dataDaProva.toLocaleDateString('pt-br')}
                tempoRestante={dataAtual > limiteProva ? "Horario da prova excedido" : formatarTempo(tempoRestante)}
            />
            </main>
        );
        }

    return(
        <main className={styles.container_principal}>
            
            {!mostrasResultado ? (
                <PainelPerguntas
                    perguntaAtual={atual + 1}
                    totalPerguntas={perguntas.length}
                    pergunta={pergunta.pergunta}
                    alternativas={pergunta.alternativas}
                    idPergunta={pergunta.id}
                    respostaSelecionada={respostaSelecionada}
                    onSelecionarResposta={(texto) => marcarResposta(pergunta.id, texto)}
                    onAvancar={() => setAtual(atual + 1)}
                    onVoltar={() => setAtual(atual - 1)}
                    podeAvancar={atual < perguntas.length - 1}
                    podeVoltar={atual > 0}
                />

            ) : (
                <div className={styles.container_resultado}>
                    <h2 className={styles.resultado_titulo}>Resultado Final</h2>
                    <p>Acertos: {resultadoFinal.corretas}</p>
                    <p>Erros: {resultadoFinal.incorretas}</p>
                    <p>Porcentagem: {resultadoFinal.porcentagem.toFixed(2)}%</p>
                    <p>
                    Situação:{' '}
                    <strong style={{ color: resultadoFinal.aprovado ? 'green' : 'red' }}>
                        {resultadoFinal.aprovado ? 'Aprovado' : 'Reprovado'}
                    </strong>
                    </p>
                    <div className={styles.resultado_erros}>
                        <h3 style={{textAlign: 'center'}}>Respostas Erradas:</h3>
                                {resultadoFinal.perguntasErradas.map((erro, idx) => (
                                    <div className={styles.resultado_alternativas} key={idx}>
                                        <p><strong>Pergunta:</strong> {erro.pergunta}</p>
                                        <p><strong>Sua resposta:</strong> {erro.respostaEscolhida}</p>
                                    </div>
                                ))}
                    </div>
                </div>
            )}

           {!telaEnviar && atual === perguntas.length - 1 ? (
                <div style={{ marginTop: 20 }}>
                    <button onClick={() => enviar()}>
                        Enviar
                    </button>
                </div>
            ) : null}
             

        </main>
    )
}