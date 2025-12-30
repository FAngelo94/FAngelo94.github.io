import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github-icon.svg";
import codepen from "../../assets/codepen.png";
import telegram from "../../assets/telegram.png";
import codingame from "../../assets/codingame.png";
import { contacts } from "../../data";
import { openCalendarPopup } from "../../utils/calendar";


export function Contact() {

  return (
    <Container id="contacts">
      <header>
        <h2>{contacts.title}</h2>
      </header>

      <div className="actions">
        <button
          className="button calendar"
          onClick={(e) => { e.preventDefault(); openCalendarPopup(contacts.calendarLink); }}
        >
          {contacts.bookACall}
        </button>
      </div>
      <p>{contacts.subtitle}</p>
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
        <a href="https://www.linkedin.com/in/angelo-falci-1292ab76/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </Container>
  )
}