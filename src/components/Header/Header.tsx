import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { header } from "../../data"
import logo from "../../assets/logo.png";

import Curriculum from '../../assets/AngeloFalci.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
        <img src={logo} alt="logo"/>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {header.home}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {header.aboutMe}
          </NavHashLink>
          <NavHashLink smooth to="#career" onClick={closeMenu}>
            {header.career}
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            {header.projects}
          </NavHashLink>
          <NavHashLink smooth to="#contacts" onClick={closeMenu}>
            {header.contacts}
          </NavHashLink>
          <a href={Curriculum} download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
