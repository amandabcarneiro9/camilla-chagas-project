import residencial from '../img/residencial2.jpg'
import comercial from '../img/comercial.jpg'
import corporativo from '../img/corporativo2.jpg'
import paisagismo from '../img/paisagismo.jpg'

import '../scss/projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="projects" data-section-name="projetos">
      <h1>Projetos</h1>
      <div className="__block">
        <Link to="/projetos/residencial" className="__project">
          <span>Residencial</span>
          <img src={residencial} alt="projeto residencial" />
        </Link>
        <Link to="projetos/comercial" href="#" className="__project">
          <span>Comercial</span>
          <img src={comercial} alt="projeto comercial" />
        </Link>
        <Link to="projetos/corporativo" className="__project">
          <span>Corporativo</span>
          <img src={corporativo} alt="projeto corporativo" />
        </Link>
        <Link to="projetos/paisagismo" className="__project">
          <span>Paisagismo</span>
          <img src={paisagismo} alt="projeto paisagismo" />
        </Link>
      </div>
      <div className="__quotes">
        <p>
          "Não é o angulo reto que me atrai, nem a linha reta, dura, iflexível, criada pelo homem. O que me atrai é a
          curva livre e sensual, a curva que encontro nas montanhas do meu país, no curso sinuoso dos seus rios, nas
          ondas do mar, no corpo da mulher preferida."
        </p>
        <span>Oscar Niemeyer</span>
        <Link to="/contato">Contato</Link>
      </div>
      <div className="__mention">
        <FontAwesomeIcon className="__icon" icon={['fas', 'hand-holding-heart']} />
        <span>Um projeto nosso, para chamar de seu. </span>
      </div>
    </div>
  )
}
