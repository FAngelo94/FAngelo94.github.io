import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { useI18n } from "../../i18n/I18nProvider"
import logo from "../../assets/logo.png";
import { generateCV } from '../../utils/pdfGenerator'

export function Header() {
  const { t, locale, setLocale } = useI18n();
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
        <HashLink smooth to="/#home" className="logo">
          <img src={logo} alt="logo" />
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">{t.header.toggle}</label>



        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="/#home" onClick={closeMenu}>
            {t.header.home}
          </NavHashLink>
          <NavHashLink smooth to="/#prices" onClick={closeMenu}>
            {t.header.prices}
          </NavHashLink>
          <NavHashLink smooth to="/#contacts" onClick={closeMenu}>
            {t.header.contacts}
          </NavHashLink>
          <NavHashLink smooth to="/#whoiam" onClick={closeMenu}>
            {t.header.whoiam}
          </NavHashLink>
          <NavHashLink smooth to="/#career" onClick={closeMenu}>
            {t.header.experience}
          </NavHashLink>
          <button className="lang-switch" onClick={() => setLocale(locale === 'en' ? 'it' : 'en')}>
            {locale === 'en' ? 'IT' : 'EN'}
          </button>
          <button onClick={handleGenerateCV} className="button button-pdf">
            {t.header.generatePdf}
          </button>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? t.header.menuClose : t.header.menuOpen}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      
    </Container>
  )
}
