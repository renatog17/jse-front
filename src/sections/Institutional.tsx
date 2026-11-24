import { ArrowUpRight, Compass, Globe2, HeartHandshake, Lightbulb, Network, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const audiences = ['Empreendedores', 'Profissionais liberais', 'Microempreendedores individuais (MEIs)', 'Micro e pequenas empresas', 'Organizações em busca de soluções administrativas, contábeis, tecnológicas e estratégicas']
const differentiators = [
  ['Atendimento humanizado', 'Acompanhamento próximo, personalizado e acessível.', HeartHandshake],
  ['Integração de competências', 'Contabilidade, tecnologia e gestão trabalhando em conjunto.', Network],
  ['Processos mais simples', 'Desburocratização e clareza para a rotina empresarial.', Compass],
  ['Tecnologia com propósito', 'Ferramentas escolhidas para responder a necessidades reais.', Lightbulb],
  ['Conhecimento compartilhado', 'Educação empresarial como parte do desenvolvimento.', Sparkles],
  ['Soluções sob medida', 'Respostas adaptadas ao contexto de cada negócio.', Globe2],
] as const

export function Audience() {
  return <section className="section audience" id="publico"><div className="wrap audience-grid"><Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Para quem desenvolvemos</p><span className="section-index">05 / PÚBLICO</span></div><h2 className="section-title">Negócios diferentes.<br /><em>Soluções com contexto.</em></h2><p className="section-intro">Nossa atuação não se limita a um segmento econômico específico, permitindo desenvolver soluções adaptadas a diferentes mercados, necessidades e oportunidades.</p></Reveal><div className="audience-list">{audiences.map((item, i) => <Reveal key={item} delay={i * 55}><div className="audience-item"><span>{String(i + 1).padStart(2, '0')}</span><p>{item}</p></div></Reveal>)}</div></div></section>
}

export function Differentials() {
  return <section className="section differentials" id="diferenciais"><div className="wrap"><Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> O que nos move</p><span className="section-index">06 / DIFERENCIAIS</span></div><h2 className="section-title">Uma forma integrada<br /><em>de fazer acontecer.</em></h2></Reveal><div className="differential-grid">{differentiators.map(([title, text, Icon], i) => <Reveal key={title} delay={i * 60}><article className="differential-card"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
}

export function Vision() {
  return <section className="section vision" id="visao"><div className="wrap"><Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Nossa visão de futuro</p><span className="section-index">07 / VISÃO</span></div><h2 className="section-title">Além da contabilidade.<br /><em>Preparados para o futuro.</em></h2><p className="section-intro">A JSE nasce com uma proposta de crescimento que ultrapassa o modelo tradicional de escritório contábil. Nossa visão é desenvolver uma estrutura empresarial multidisciplinar, capaz de acompanhar as transformações econômicas, tecnológicas e globais.</p></Reveal><div className="vision-pillars"><Reveal><article><span>01</span><h3>Contabilidade e soluções empresariais</h3><p>Organização, regularização, consultoria e orientação estratégica para o desenvolvimento dos negócios.</p></article></Reveal><Reveal delay={80}><article><span>02</span><h3>Tecnologia e inovação</h3><p>Desenvolvimento de ferramentas, automações, sistemas e soluções digitais que simplifiquem a rotina empresarial.</p></article></Reveal><Reveal delay={160}><article><span>03</span><h3>Internacionalização</h3><p>Uma perspectiva de atender empresas e investidores estrangeiros que queiram estabelecer ou expandir negócios no Brasil, com atenção especial às oportunidades do mercado chinês. O desenvolvimento de competências em inglês e mandarim integra essa estratégia de futuro.</p></article></Reveal></div></div></section>
}

export function Competencies() {
  return <section className="section competencies"><div className="wrap competencies-grid"><Reveal><div className="competency-mark" aria-hidden="true"><Network size={60} strokeWidth={1} /><span>JSE / CONEXÕES</span></div></Reveal><Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Competências multidisciplinares</p><span className="section-index">08 / INTEGRAÇÃO</span></div><h2 className="section-title">Diferentes competências.<br /><em>Um mesmo propósito.</em></h2><p>Acreditamos que a integração entre conhecimento contábil, empresarial, tecnológico e estratégico permite construir soluções mais completas.</p><p className="about-note">Unimos diferentes habilidades, experiências e perspectivas para desenvolver uma empresa inovadora, sustentável e preparada para novas oportunidades de mercado.</p></Reveal></div></section>
}

export function Purpose() {
  return <section className="purpose"><div className="wrap purpose-inner"><Reveal><p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Nosso propósito</p><h2>Transformar conhecimento em soluções, aproximar pessoas da tecnologia e tornar o ambiente empresarial mais simples, eficiente e acessível.</h2><a className="button button-coral" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a></Reveal></div></section>
}
