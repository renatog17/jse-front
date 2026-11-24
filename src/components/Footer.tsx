import { contact, navigation } from '../constants/site'
import { Brand } from './Brand'

export function Footer() {
  const channels = [contact.whatsapp && { label: 'WhatsApp', href: contact.whatsapp }, contact.email && { label: contact.email, href: `mailto:${contact.email}` }, contact.instagram && { label: 'Instagram', href: contact.instagram }, contact.linkedin && { label: 'LinkedIn', href: contact.linkedin }].filter((item): item is { label: string; href: string } => Boolean(item))
  return <footer className="footer"><div className="wrap footer-top"><div className="footer-brand"><Brand /><span>Conectando negócios, traduzindo soluções.</span></div><nav aria-label="Navegação do rodapé">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-end">{channels.length > 0 && <nav className="footer-channels" aria-label="Canais de atendimento">{channels.map(item => <a key={item.label} href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{item.label}</a>)}</nav>}<a className="back-top" href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Junta Solução Empresarial</span></div></footer>
}
