import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import logo from "../../assets/logo.png";
import { useI18n } from "../../i18n/I18nProvider"
import { Link } from 'react-router-dom'

const version = process.env.REACT_APP_VERSION || "dev";

export function Footer() {
  const { t } = useI18n();
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <img src={logo} alt="logo"/>
      </a>
      <div>
        <p>
          {t.footer.center} <img src={reactIcon} alt="React" /> {t.footer.center2}
          <span>❤️</span>
        </p>
        <small className="version">v{version}</small>
      </div>

      <div className="policy-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span style={{ margin: '0 8px' }}>•</span>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </div>
    </Container>
  )
}
