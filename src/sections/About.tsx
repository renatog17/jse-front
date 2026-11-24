import { Reveal } from '../components/Reveal'
import { BrandMark } from '../components/BrandMark'

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="wrap about-grid">
        <Reveal className="about-stamp"><div className="stamp-ring"><BrandMark /><span>JUNTA SOLUÇÃO EMPRESARIAL</span><span>CONTABILIDADE • GESTÃO • TECNOLOGIA</span></div><span className="stamp-cross">+</span></Reveal>
        <div className="about-copy">
          <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Quem somos</p><span className="section-index">02 / SOBRE</span></div></Reveal>
          <Reveal><h2>Conexões que<br /><em>fazem avançar.</em></h2></Reveal>
          <Reveal><p>A Junta Solução Empresarial (JSE) é uma empresa de serviços contábeis e soluções empresariais, criada para simplificar a gestão, conectar pessoas e empresas a soluções inteligentes e facilitar o desenvolvimento empresarial.</p></Reveal>
          <Reveal><p>Nossa proposta integra conhecimento técnico, tecnologia e atendimento humanizado para tornar processos complexos mais simples, acessíveis e eficientes.</p></Reveal>
          <Reveal><p className="about-note">Mais do que prestar serviços contábeis, queremos ser parceiros estratégicos dos empreendedores, apoiando a organização, regularização, gestão e crescimento dos negócios. Acreditamos que conhecimento deve ser compartilhado e que a tecnologia deve aproximar as pessoas das soluções.</p></Reveal>
        </div>
      </div>
    </section>
  )
}
