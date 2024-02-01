import "./menu.css";

export default function Menu() {
  return (
    <section className="container-menu">
      <div className="title">
        <h1 data-aos="fade-left">CARDÁPIO</h1>
      </div>

      <div className="menu">
        <a
          data-aos="fade-left"
          href={require("../../assets/pdf/CARDÁPIO.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/imgs/menu/petiscos.jpeg")}
            alt="camarão"
          />
          <h3>Petiscos</h3>
        </a>
        <a
          data-aos="fade-up"
          href={require("../../assets/pdf/CARDÁPIO.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/imgs/menu/feijão.jpeg")}
            alt="camarão"
          />
          <h3>Pratos</h3>
        </a>
        <a
          href={require("../../assets/pdf/CARDÁPIO.pdf")}
          target="_blank"
          rel="noreferrer"
          data-aos="fade-right"
        >
          <img
            src={require("../../assets/imgs/menu/drinks.jpeg")}
            alt="camarão"
          />
          <h3>Drinks</h3>
        </a>
      </div>
    </section>
  );
}
