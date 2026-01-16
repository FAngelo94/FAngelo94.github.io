import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import logo from "../../assets/logo.png";
import { useI18n } from "../../i18n/I18nProvider"
import { Link } from 'react-router-dom'
import { trackEvent } from '../../utils/analytics'

const version = process.env.REACT_APP_VERSION || "dev";

export function Footer() {
  const { t } = useI18n();
  return (
    <Container className="footer">
      <a href="/" className="logo" onClick={() => void trackEvent('footer_logo_click', { to: '/' })}>
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
        <Link to="/privacy-policy" onClick={() => void trackEvent('footer_policy_click', { policy: 'privacy' })}>Privacy Policy</Link>
        <span>•</span>
        <Link to="/cookie-policy" onClick={() => void trackEvent('footer_policy_click', { policy: 'cookie' })}>Cookie Policy</Link>
      </div>
    </Container>
  )
}
