import "./footer.css";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer data-aos="fade-up">
      <div className="infos">
        <div>
          <h3>Castello</h3>
          <span>&copy; - TODOS OS DIREITOS RESERVADOS - 2023</span>
        </div>
        <div>
          <h3>CONTATOS</h3>
          <a
            href="https://www.instagram.com/castellofortaleza/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram /> /CASTELLOFORTALEZA
          </a>
          <a href="https://wa.me/85992859449" target="_blank" rel="noreferrer">
            <BsWhatsapp /> /WHATSAPP
          </a>
        </div>
      </div>
      <div className="producer">
        <p>
          CRIADO POR:{" "}
          <a
            href="https://portfolio-three-bay-73.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            HumDev
          </a>
        </p>
      </div>
    </footer>
  );
}
