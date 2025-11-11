import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github-icon.svg'
import codepen from '../../assets/codepen.png'
import telegram from '../../assets/telegram.png'
import codingame from "../../assets/codingame.png"
import logo from "../../assets/logo.png";
import { footer} from "../../data"

const version = process.env.REACT_APP_VERSION || "dev";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <img src={logo} alt="logo"/>
      </a>
      <div>
        <p>
          {footer.center} <img src={reactIcon} alt="React" /> {footer.center2}
          <span>❤️</span>
        </p>
        <small className="version">v{version}</small>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/angelo-falci-1292ab76/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/FAngelo94"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://codepen.io/FAngelo94/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codepen} alt="Codepen" />
        </a>

        <a
          href="https://www.codingame.com/profile/431b0c5f5e61df133a64b701315f977d6866633"
          target="_blank"
          rel="noreferrer"
        >
          <img src={codingame} alt="Codingame" />
        </a>
        
        <a
          href="https://web.telegram.org/#/im?p=@fangelo94"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
    </Container>
  )
}
