import { Children, useState } from 'react'
import Hamburger from 'hamburger-react'

import '../scss/Header.scss'

import { Link } from 'react-router-dom'

import SocialIcons from '../components/SocialIcons'
// import Hamburger from '../components/Hamburger'

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  function linkClick() {
    setOpen(false)
  }

  return (
    <header className={`header ${isOpen ? '--menu-opened' : ''}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="__links">
        <Link to="/" onClick={linkClick}>
          Início
        </Link>
        <Link to="/sobre" onClick={linkClick}>
          Sobre
        </Link>
        <Dropdown linkTo="/projetos" label="Projetos">
          <Link onClick={linkClick} to="/projetos/residencial">
            Residencial
          </Link>
          <Link onClick={linkClick} to="/projetos/comercial">
            Comercial
          </Link>
          <Link onClick={linkClick} to="/projetos/corporativo">
            Corporativo
          </Link>
          <Link onClick={linkClick} to="/projetos/paisagismo">
            Paisagismo
          </Link>
        </Dropdown>
        <Dropdown linkTo="/servicos" label="Serviços">
          <Link onClick={linkClick} to="/servicos/consultoria">
            Consultoria
          </Link>
          <Link onClick={linkClick} to="/servicos/decoracao">
            Decoração Express
          </Link>
          <Link onClick={linkClick} to="/servicos/projetos">
            Projetos Interiores
          </Link>
          <Link onClick={linkClick} to="/servicos/obra">
            Obras
          </Link>
        </Dropdown>
        <Link onClick={linkClick} to="/instagram">
          Instagram
        </Link>
        <Link onClick={linkClick} to="/contato">
          Contato
        </Link>
      </div>
      <div className="__socialIcons">
        <SocialIcons />
      </div>
    </header>
  )
}

function Dropdown({ linkTo, label, children }) {
  const [opened, setOpened] = useState(false)
  function toggleDropDown(event) {
    event.preventDefault()
    setOpened(!opened)
  }
  return (
    <div className={`__dropdown ${opened ? '--showing' : ''}`}>
      <Link to={linkTo} onClick={toggleDropDown}>
        {label}
      </Link>
      <div>{children}</div>
    </div>
  )
}
