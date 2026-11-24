import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Solutions } from './sections/Solutions'
import { About } from './sections/About'
import { Process } from './sections/Process'
import { Contact } from './sections/Contact'
import { Audience, Competencies, Differentials, Purpose, Vision } from './sections/Institutional'
import './styles/global.css'

function App() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo" className="min-h-screen"><Hero /><About /><Solutions /><Process /><Audience /><Differentials /><Vision /><Competencies /><Purpose /><Contact /></main><Footer /></>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
