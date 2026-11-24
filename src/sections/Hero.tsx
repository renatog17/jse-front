import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { BrandMark } from '../components/BrandMark'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Conectando negócios, traduzindo soluções.</p>
          <h1>Conectando negócios,<br /><em>traduzindo soluções.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">Integramos contabilidade, tecnologia e gestão para simplificar processos, transformar negócios e construir novas oportunidades.</p>
            <div className="hero-actions">
              <a className="button button-coral" href="#solucoes">Conheça nossas soluções <ArrowUpRight size={17} /></a>
              <a className="text-link light-link" href="#contato">Fale conosco <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-label">IDEIAS EM MOVIMENTO <span>JSE / 01</span></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-core"><BrandMark /></div>
          <div className="art-cross cross-a" /><div className="art-cross cross-b" />
          <div className="art-caption">Estratégia<br />+ ação</div>
          <div className="hero-art-bottom"><span>01 — 04</span><span>CLAREZA PARA AVANÇAR</span></div>
        </div>
      </div>
      <a className="scroll-cue wrap" href="#solucoes"><span>Role para descobrir</span><ArrowDown size={15} /></a>
    </section>
  )
}
