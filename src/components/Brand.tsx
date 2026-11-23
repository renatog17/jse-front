import { BrandMark } from './BrandMark'

export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="JSE, página inicial">
      <BrandMark />
      <span className="brand-name">Junta Solução<br />Empresarial</span>
    </a>
  )
}
