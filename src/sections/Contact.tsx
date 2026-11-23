import { ArrowUpRight, Mail } from 'lucide-react'
import { contact } from '../constants/site'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const socialLinks = [contact.instagram && { label: 'Instagram', href: contact.instagram }, contact.linkedin && { label: 'LinkedIn', href: contact.linkedin }].filter((item): item is { label: string; href: string } => Boolean(item))
  return (
    <section className="contact section" id="contato">
      <div className="wrap contact-wrap">
        <Reveal><div className="section-head"><p className="eyebrow"><span className="eyebrow-line" /> Próxima conversa</p><span className="section-index">04 / CONTATO</span></div></Reveal>
        <Reveal><h2>Vamos transformar<br />seu próximo desafio<br /><em>em uma solução?</em></h2></Reveal>
        <Reveal><p className="contact-intro">Conte um pouco do que você está buscando. Estamos dando os primeiros passos e será um prazer conversar.</p></Reveal>
        <Reveal><div className="contact-actions">
          {contact.whatsapp ? <a className="button button-coral" href={contact.whatsapp} target="_blank" rel="noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={17} /></a> : <span className="button button-disabled" aria-disabled="true">WhatsApp em breve</span>}
          {contact.email ? <a className="contact-detail" href={`mailto:${contact.email}`}><Mail size={17} />{contact.email}</a> : <span className="contact-detail muted"><Mail size={17} /> E-mail corporativo em breve</span>}
        </div></Reveal>
        <Reveal><div className="social-links">{socialLinks.length ? socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={14} /></a>) : <span>Redes sociais em breve</span>}</div></Reveal>
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </section>
  )
}
