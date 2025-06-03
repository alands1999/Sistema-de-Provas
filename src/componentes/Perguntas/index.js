import styles from './style.module.css';

export default function PainelPerguntas({
  perguntaAtual,
  totalPerguntas,
  pergunta,
  alternativas,
  idPergunta,
  respostaSelecionada,
  onSelecionarResposta,
  onAvancar,
  onVoltar,
  podeAvancar,
  podeVoltar
}) {
      return (
        <main>
            <section className={styles.container_principal}>
                <div className={styles.container_titulos}>
                    <h1 className={styles.titulo}>Pergunta {perguntaAtual} de {totalPerguntas}</h1>
                    <h2 className={styles.pergunta}>{pergunta}</h2>
                </div>

                {alternativas.map((alt, idx) => (
                <div className={styles.container_alternativas} key={idx}>

                    <label className={styles.alternativa}>
                       <input type='radio' 
                       name={`pergunta-${idPergunta}`}
                       value={alt.texto} 
                       checked={respostaSelecionada === alt.texto}
                       onChange={() => onSelecionarResposta(alt.texto)}
                       /> 
                        {alt.texto}
                    </label>

                </div>
                 ))}
                 
                <div className={styles.container_botoes}>
                    <button className={styles.botao} onClick={onVoltar}  disabled={!podeVoltar}>Voltar</button>

                    <button className={styles.botao} onClick={onAvancar} disabled={!podeAvancar}>Avançar</button>
                </div>

               
                

            </section>
        </main>
    )
}