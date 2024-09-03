import "./combos.css";
import { Link } from "react-router-dom";

export default function Combos() {
  return (
    <article data-aos="fade-down" className="boxes-combos">
      <div className="box-combo">
        <div className="text-combo">
          <p>GIN TANQUERAY + 4 SCHWEPPES + GELO</p>
          <strong>R$ 260</strong>
        </div>
        <Link to="/menu">Ver mais</Link>
        <div className="img-combo">
          <img src={require("../../assets/imgs/combo-1.png")} alt="Combo 1" />
        </div>
      </div>
      <div className="box-combo">
        <div className="text-combo">
          <p>VODKA ABSOLUT + 5 LATINHAS + GELO</p>
          <strong>R$ 300</strong>
        </div>
        <Link to="/menu">Ver mais</Link>
        <div className="img-combo">
          <img src={require("../../assets/imgs/combo-2.png")} alt="Combo 2" />
        </div>
      </div>
      <div className="box-combo">
        <div className="text-combo">
          <p>OLD PARR + 4 REDBULL + GELO</p>
          <strong>R$ 320</strong>
        </div>
        <Link to="/menu">Ver mais</Link>
        <div className="img-combo">
          <img src={require("../../assets/imgs/combo-3.png")} alt="Combo 3" />
        </div>
      </div>
      <div className="box-combo">
        <div className="text-combo">
          <p>RED LABEL + 4 REDBULL + GELO</p>
          <strong>R$ 250</strong>
        </div>
        <Link to="/menu">Ver mais</Link>
        <div className="img-combo">
          <img src={require("../../assets/imgs/combo-4.png")} alt="Combo 4" />
        </div>
      </div>
    </article>
  );
}
