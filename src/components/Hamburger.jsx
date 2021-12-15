import { useState } from 'react'
import HamburgerIcon from 'hamburger-react'
import { scroll } from '../sections/header'
import '../scss/hamburger.scss'

import SocialIcons from '../components/SocialIcons'

export default function Hamburguer() {
  const [isOpen, setOpen] = useState(false)

  //   function showMenu() {
  //     return (

  //     )
  //   }
  //   if (isOpen) {
  //     showMenu()
  //   }

  return (
    <>
      <HamburgerIcon toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="nav-links">
          <a href="#" onClick={scroll}>
            Início
          </a>
          <a href="#about" onClick={scroll}>
            Sobre
          </a>
          <div className="__list">
            <a href="#projects" onClick={scroll}>
              Projetos
            </a>
            <div>
              <a href="#">Residencial</a>

              <a href="#">Comercial</a>

              <a href="#">Corporativo</a>

              <a href="#">Paisagismo</a>
            </div>
          </div>
          <div className="__list">
            <a href="#">Serviços</a>
            <div>
              <a href="#">Consultoria</a>

              <a href="#">Decoração Express</a>

              <a href="#">Projetos Interiores</a>

              <a href="#">Obras</a>
            </div>
          </div>
          <a href="#">Instagram</a>
          <a href="#contact" onClick={scroll}>
            Contato
          </a>
          <SocialIcons />
        </div>
      )}
    </>
  )
}
