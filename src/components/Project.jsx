import Header from '../sections/header'
import './project.scss'

export default function Project({ nameProject, image, imageName, paragraph, span }) {
  return (
    <div className="project">
      <a name={nameProject}></a>
      <div className="image">
        <img src={image} alt={imageName} />
      </div>
      <div className="__texts">
        <h2>{nameProject}</h2>
        <span>{span}</span>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
