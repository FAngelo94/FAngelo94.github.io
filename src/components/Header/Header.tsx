import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { header } from "../../data"
import logo from "../../assets/logo.png";
import { generateCV } from '../../utils/pdfGenerator'

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  function handleGenerateCV() {
    try {
      generateCV();
      closeMenu(); // Close menu after generating CV
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Error generating CV. Please try again.');
    }
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
          <NavHashLink smooth to="#prices" onClick={closeMenu}>
            {header.prices}
          </NavHashLink>
          <NavHashLink smooth to="#contacts" onClick={closeMenu}>
            {header.contacts}
          </NavHashLink>
          <NavHashLink smooth to="#whoiam" onClick={closeMenu}>
            {header.whoiam}
          </NavHashLink>
          <NavHashLink smooth to="#career" onClick={closeMenu}>
            {header.experience}
          </NavHashLink>
          <button onClick={handleGenerateCV} className="button button-pdf">
            {header.generatePdf}
          </button>
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
