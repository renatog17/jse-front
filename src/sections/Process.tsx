import { Reveal } from '../components/Reveal'

const steps = [
  ['01', 'Entendemos o desafio.', 'Escutamos, fazemos perguntas e conhecemos o contexto.'],
  ['02', 'Planejamos a solução.', 'Organizamos prioridades e desenhamos um caminho possível.'],
  ['03', 'Desenvolvemos o projeto.', 'Transformamos o plano em ações, com colaboração ao longo do percurso.'],
  ['04', 'Acompanhamos os resultados.', 'Observamos o que mudou e aprendemos com cada etapa.'],
]

export function Process() {
  return (
    <section className="process section">
      <div className="wrap">
        <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Nosso jeito de trabalhar</p><span className="section-index">03 / PROCESSO</span></div></Reveal>
        <Reveal><div className="process-heading"><h2>Do primeiro<br /><em>olá ao próximo passo.</em></h2><p>Um processo próximo e transparente para transformar intenção em movimento.</p></div></Reveal>
        <div className="process-steps">
          {steps.map(([number, title, body], index) => <Reveal key={number} delay={index * 100}><article className="process-step"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><span className="step-dot" /></article></Reveal>)}
        </div>
      </div>
    </section>
  )
}
