import "./TextIntroduction.css";

export default function TextIntroduction() {
  return (
    <div className="container-introduction">
      <div className="introduction">
        <div data-aos="fade-up" className="introduction-text">
          <h2>Diverção</h2>
          <p>
            Descubra o mundo de pura diversão na Boate Castello em Fortaleza!
          </p>
          <p>
            Garotas incríveis, drinks irresistíveis, pizzas saborosas e um
            ambiente todo climatizado, com pole dance pra elas dançarem, eventos
            para casais liberais, estacionamento privativo e gratuito e muito
            mais….
          </p>
          <p>
            Venha viver noites inesquecíveis, onde a animação não tem limites.
          </p>
        </div>
        <div data-aos="fade-down" className="introduction-img">
          <img src={require("../../assets/imgs/girls.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
}
