import './footer.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer data-aos='fade-up'>
            <div className='infos'>
                <div>
                    <h3>Castello</h3>
                    <span>TODOS OS DIREITOS RESERVADOS - 2023</span>
                </div>
                <div>
                    <h3>CONTATOS</h3>
                    <a href=""><BsInstagram /> /CASTELLOFORTALEZA</a>
                    <a href=""><BsWhatsapp /> /WHATSAPP</a>
                </div>
            </div>
            <div className="producer">
                <p>
                    CRIADO POR: <a 
                    href="https://portfoliomynotes.netlify.app/">
                        HUMBERTO MONTEIRO
                    </a>
                </p>
            </div>
        </footer>
    )
}