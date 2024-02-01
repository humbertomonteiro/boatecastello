import "./contacts.css";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Contacts() {
  return (
    <main className="container-contacts">
      <div className="contacts">
        <div data-aos="fade-up" className="links">
          <h1 data-aos="fade-right">CONTATOS</h1>
          <a href="instagram">
            <BsInstagram /> /CASTELLOFORTALEZA
          </a>

          <a href="whatsapp">
            <BsWhatsapp /> (85) 9.9285-9449
          </a>
        </div>
        <div className="img" data-aos="fade-up">
          <img src={require("../../assets/imgs/contact.png")} alt="" />
        </div>
      </div>
    </main>
  );
}
