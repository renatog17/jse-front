import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const areas = [
  { number: '01', title: 'Estratégia & gestão', description: 'Organização e direcionamento para apoiar decisões mais claras no dia a dia do negócio.' },
  { number: '02', title: 'Processos & eficiência', description: 'Um olhar atento para rotinas, oportunidades de melhoria e formas de trabalhar melhor.' },
  { number: '03', title: 'Tecnologia & inovação', description: 'Uso consciente da tecnologia para responder a necessidades reais da empresa.' },
]

export function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="wrap">
        <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> O que fazemos</p><span className="section-index">01 / SOLUÇÕES</span></div></Reveal>
        <Reveal><h2 className="section-title">Desafios diferentes.<br /><em>Caminhos feitos em conjunto.</em></h2></Reveal>
        <Reveal><p className="section-intro">Cada negócio tem seu contexto. A JSE aproxima pessoas, conhecimento e ferramentas para construir respostas que façam sentido.</p></Reveal>
        <div className="solutions-list">
          {areas.map((area, index) => <Reveal key={area.number} delay={index * 90}><article className="solution-row"><span className="solution-number">{area.number}</span><h3>{area.title}<small>Área em definição</small></h3><p>{area.description}</p><span className="solution-icon" aria-hidden="true"><ArrowUpRight size={19} /></span></article></Reveal>)}
        </div>
        <p className="provisional-note">As áreas acima são categorias iniciais de apresentação e serão ajustadas conforme o portfólio da JSE for definido.</p>
      </div>
    </section>
  )
}
