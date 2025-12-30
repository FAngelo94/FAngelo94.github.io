import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github-icon.svg";
import codepen from "../../assets/codepen.png";
import telegram from "../../assets/telegram.png";
import codingame from "../../assets/codingame.png";
import { contacts } from "../../data";


export function Contact() {

  const openCalendarPopup = () => {
    const url = "https://calendar.app.google/dcnshtZYNqVt4KQx6";
    const width = 1200;
    const height = 800;
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : (window as any).screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : (window as any).screenY;
    const w = window.innerWidth || document.documentElement.clientWidth || (window as any).screen.width;
    const h = window.innerHeight || document.documentElement.clientHeight || (window as any).screen.height;
    const left = w ? dualScreenLeft + (w - width) / 2 : 0;
    const top = h ? dualScreenTop + (h - height) / 2 : 0;
    const popup = window.open(
      url,
      "calendar-popup",
      `scrollbars=yes,resizable=yes,width=${width},height=${height},top=${top},left=${left},noopener`
    );
    if (popup) {
      popup.focus();
    } else {
      // Popup blocked: try a non-disruptive fallback (new tab)
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container id="contacts">
      <header>
        <h2>{contacts.title}</h2>
      </header>

      <div className="primary-actions">
        <button
          className="button calendar"
          onClick={(e) => { e.preventDefault(); openCalendarPopup(); }}
        >
          {contacts.bookACall}
        </button>
      </div>
      <p>{contacts.subtitle}</p>
      <div className="contacts">
          <a className="button button-secondary contact-btn" href="mailto:a.falci@live.it">
            <img src={emailIcon} alt="Email" />
            <span>a.falci@live.it</span>
          </a>
          <a className="button button-secondary contact-btn" href="tel:+393473927579">
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