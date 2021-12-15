import { Link } from 'react-router-dom'

import consultoria from '../img/consultoria.jpg'
import decoração from '../img/decoracao.jpg'
import projetos from '../img/projetosIn.jpg'
import obras from '../img/obras.jpg'

import '../scss/projects.scss'

import { scroll } from './header'

export default function Services() {
  return (
    <div className="projects" data-section-name="servicos">
      <h1>Serviços</h1>
      <div className="__block">
        <Link to="/servicos/consultoria" className="__project">
          <span>Consultoria</span>
          <img src={consultoria} alt="pessoa mechendo no computador" />
        </Link>
        <Link to="/servicos/decoracao" className="__project">
          <span>Decoração Express</span>
          <img src={decoração} alt="cozinha planejada" />
        </Link>
        <Link to="/servicos/projetos" className="__project">
          <span>Projetos Interiores</span>
          <img src={projetos} alt="papeis de projeto" />
        </Link>
        <Link to="/servicos/obra" className="__project">
          <span>Obra</span>
          <img src={obras} alt="chapeu de obra sob a mesa" />
        </Link>
      </div>
      <div className="__quotes">
        <p>Pronto para dar o próximo passo? Entre em contato ainda hoje.</p>
        <Link to="/contato">Contato</Link>
      </div>
    </div>
  )
}
