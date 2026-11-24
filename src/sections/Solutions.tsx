import { ArrowUpRight, BookOpen, BriefcaseBusiness, Calculator, Cpu } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const areas = [
  { number: '01', title: 'Contabilidade e tributação', description: 'Serviços contábeis, fiscais e tributários, planejamento e orientação para decisões mais seguras.', icon: Calculator, id: 'contabilidade' },
  { number: '02', title: 'Gestão e regularização empresarial', description: 'Abertura, alteração e encerramento de empresas, regularização, consultoria e soluções de gestão.', icon: BriefcaseBusiness, id: 'gestao' },
  { number: '03', title: 'Tecnologia e inovação', description: 'Sistemas, automação, otimização de processos e soluções digitais personalizadas.', icon: Cpu, id: 'tecnologia' },
  { number: '04', title: 'Educação empresarial', description: 'Palestras, cursos, treinamentos, disseminação de conhecimento e capacitação empresarial.', icon: BookOpen, id: 'educacao' },
]

export function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="wrap">
        <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> O que fazemos</p><span className="section-index">01 / SOLUÇÕES</span></div></Reveal>
        <Reveal><h2 className="section-title">Soluções que conectam.<br /><em>Competências que se complementam.</em></h2></Reveal>
        <Reveal><p className="section-intro">Contabilidade, gestão, tecnologia e educação empresarial em frentes integradas, com atenção ao contexto de cada negócio.</p></Reveal>
        <div className="solutions-list">
          {areas.map((area, index) => <Reveal key={area.number} delay={index * 90}><article className="solution-row" id={area.id}><span className="solution-number">{area.number}</span><div className="solution-title"><span className="solution-icon" aria-hidden="true"><area.icon size={19} /></span><h3>{area.title}</h3></div><p>{area.description}</p><span className="solution-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span></article></Reveal>)}
        </div>
      </div>
    </section>
  )
}
