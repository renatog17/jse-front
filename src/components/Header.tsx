import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../constants/site'
import { Brand } from './Brand'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${open ? ' is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  )
}
