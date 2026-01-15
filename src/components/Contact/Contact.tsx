import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import pecIcon from "../../assets/pec-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import githubIcon from '../../assets/github-icon.svg'
import codepen from '../../assets/codepen.png'
import codingame from "../../assets/codingame.png"
import { useI18n } from "../../i18n/I18nProvider";
import { openCalendarPopup } from "../../utils/calendar";


export function Contact() {
  const { t } = useI18n();

  return (
    <Container id="contacts">
      <header>
        <h2>{t.contacts.title}</h2>
      </header>

      <div className="actions">
        <button
          className="button calendar"
          onClick={(e) => { e.preventDefault(); openCalendarPopup(t.contacts.calendarLink); }}
        >
          {t.contacts.bookACall}
        </button>
      </div>
      <p>{t.contacts.subtitle}</p>
      <div className="actions">
        <a className="button button-secondary" href="mailto:a.falci@live.it">
          <img src={emailIcon} alt="Email" />
          <span>a.falci@live.it</span>
        </a>
        <a className="button button-secondary" href="tel:+393473927579">
          <img src={phoneIcon} alt="Phone" />
          <span>+39 347 3927579</span>
        </a>
      </div>

      <div className="social-links">

        <a href="https://web.telegram.org/#/im?p=@fangelo94" target="_blank" rel="noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
        <a href="https://www.linkedin.com/in/angelo-falci/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:angelo.falci@ingpec.eu" target="_blank" rel="noreferrer">
          <img src={pecIcon} alt="PEC" />
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
      </div>
    </Container>
  )
}