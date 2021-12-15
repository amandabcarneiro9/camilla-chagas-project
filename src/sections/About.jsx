import project from '../img/project.png'
import '../scss/about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <div className="about" data-section-name="sobre">
      <div className="__content">
        <h1>
          SOBRE <FontAwesomeIcon icon={['fas', 'heart']} />
        </h1>
        <p>
          Camilla Chagas, Carioca, 30 anos, Designer de Interiores formada pela Universidade Veiga de Almeida em 2012,
          com diversos cursos de extensão, incluindo cursos de computação voltados para o design de interiores.
        </p>
        <p>
          Trabalhando por inovações em seus projetos, trazendo versatilidade, funcionalidade e praticidade nos
          ambientes, pensando em economia, porque um bom projeto vai muito além da estética.
        </p>
      </div>
      <img src={project} alt="room project" />
    </div>
  )
}
