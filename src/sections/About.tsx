import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="wrap about-grid">
        <Reveal className="about-stamp"><div className="stamp-ring"><span>JSE</span><span>JUNTA SOLUÇÃO EMPRESARIAL</span><span>EST. • EM CONSTRUÇÃO</span></div><span className="stamp-cross">+</span></Reveal>
        <div className="about-copy">
          <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Quem somos</p><span className="section-index">02 / SOBRE</span></div></Reveal>
          <Reveal><p>A JSE nasceu da iniciativa de dois sócios que acreditam no poder das boas soluções empresariais. Somos uma empresa em construção, com vontade de compreender cada cenário e criar caminhos junto com quem empreende.</p></Reveal>
          <Reveal><p className="about-note">Acreditamos em relações próximas, conversas honestas e trabalho orientado por contexto. Nossa história está começando — e queremos construí-la com propósito.</p></Reveal>
          <Reveal><div className="founders-placeholder"><span>ESPAÇO PARA OS FUNDADORES</span><div><i /><i /></div><small>Em breve: apresentação dos sócios da JSE</small></div></Reveal>
        </div>
      </div>
    </section>
  )
}
