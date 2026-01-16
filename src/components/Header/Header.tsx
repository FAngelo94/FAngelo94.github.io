import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { useI18n } from "../../i18n/I18nProvider"
import logo from "../../assets/logo.png";
import { generateCV } from '../../utils/pdfGenerator'
import { trackEvent } from '../../utils/analytics'

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [isActive, setActive] = useState(false)

  const toggleTheme = () => {
    let html = document.getElementsByTagName('html')[0]
    const isLight = html.classList.toggle('light')
    void trackEvent('header_toggle_theme', { mode: isLight ? 'light' : 'dark' })
  }

  const closeMenu = () => {
    setActive(false)
  }

  const handleGenerateCV = () => {
    try {
      generateCV();
      closeMenu(); // Close menu after generating CV
      void trackEvent('header_generate_cv', { source: 'menu' })
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Error generating CV. Please try again.');
    }
  }

  const changeLanguage = () => {
    const newLocale = locale === 'en' ? 'it' : 'en';
    setLocale(newLocale);
    closeMenu();
    void trackEvent('header_change_language', { to: newLocale });
  }

  return (
    <Container className="header-fixed">
        <HashLink smooth to="/#home" className="logo" onClick={() => void trackEvent('header_logo_click', { to: '/#home' })}>
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
          <NavHashLink smooth to="/#home" onClick={() => { closeMenu(); void trackEvent('header_nav_click', { item: 'home' }); }}>
            {t.header.home}
          </NavHashLink>
          <NavHashLink smooth to="/#prices" onClick={() => { closeMenu(); void trackEvent('header_nav_click', { item: 'prices' }); }}>
            {t.header.prices}
          </NavHashLink>
          <NavHashLink smooth to="/#contacts" onClick={() => { closeMenu(); void trackEvent('header_nav_click', { item: 'contacts' }); }}>
            {t.header.contacts}
          </NavHashLink>
          <NavHashLink smooth to="/#whoiam" onClick={() => { closeMenu(); void trackEvent('header_nav_click', { item: 'whoiam' }); }}>
            {t.header.whoiam}
          </NavHashLink>
          <NavHashLink smooth to="/#career" onClick={() => { closeMenu(); void trackEvent('header_nav_click', { item: 'career' }); }}>
            {t.header.experience}
          </NavHashLink>
          <button className="lang-switch" onClick={changeLanguage}>
            {locale === 'en' ? 'IT' : 'EN'}
          </button>
          <button onClick={() => { handleGenerateCV(); }} className="button button-pdf">
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
