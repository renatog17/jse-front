import { navigation } from '../constants/site'
import { Brand } from './Brand'

export function Footer() {
  return <footer className="footer"><div className="wrap footer-top"><Brand /><nav aria-label="Navegação do rodapé">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="back-top" href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} JSE — Junta Solução Empresarial</span><span>Feito com intenção. Em construção.</span></div></footer>
}
