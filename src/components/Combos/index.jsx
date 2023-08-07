import './combos.css'
import { Link } from 'react-router-dom'

export default function Combos() {
    return (
        <article data-aos='fade-down' className='boxes-combos'>
            <div className="box-combo margin margin2">
                <div className="text-combo">
                    <p>
                        GIN TANQUERAY + 4 SCHWEPPES + GELO
                    </p>
                    <strong>R$ 260</strong>
                </div>
                <Link to='/menu'>Ver mais</Link>
                <img src={require('../../assets/imgs/combo1.png')} alt="" />
            </div>
            <div className="box-combo margin margin2">
                <div className="text-combo">
                    <p>
                        GIN TANQUERAY + 4 SCHWEPPES + GELO
                    </p>
                    <strong>R$ 260</strong>
                </div>
                <Link to='/menu'>Ver mais</Link>
                <img src={require('../../assets/imgs/combo1.png')} alt="" />
            </div>
            <div className="box-combo margin">
                <div className="text-combo">
                    <p>
                        GIN TANQUERAY + 4 SCHWEPPES + GELO
                    </p>
                    <strong>R$ 260</strong>
                </div>
                <Link to='/menu'>Ver mais</Link>
                <img src={require('../../assets/imgs/combo1.png')} alt="" />
            </div>
            <div className="box-combo">
                <div className="text-combo">
                    <p>
                        GIN TANQUERAY + 4 SCHWEPPES + GELO
                    </p>
                    <strong>R$ 260</strong>
                </div>
                <Link to='/menu'>Ver mais</Link>
                <img src={require('../../assets/imgs/combo1.png')} alt="" />
            </div>
        </article>
    )
}