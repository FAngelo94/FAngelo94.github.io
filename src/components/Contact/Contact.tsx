import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { contacts } from "../../data";


export function Contact(){

  return(
    <Container id="contacts">
      <header>
        <h2>{contacts.title}</h2>
        <p>{contacts.subtitle}</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:a.falci@live.it">a.falci@live.it</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+393473927579">+39 347 3927579</a>
        </div>  
      </div>
      {/* <Form></Form> //TODO Maybe enable it in future*/}
    </Container>
  )
}