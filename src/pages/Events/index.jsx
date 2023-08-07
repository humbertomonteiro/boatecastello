import './events.css'

export default function Events() {
    return(
        <main className='container-events'>

            <div className="title">
                <h1 data-aos='fade-left'>Eventos</h1>
            </div>
            
            <div className="event">
                <div data-aos='fade-down'>
                    <img src={require('../../assets/imgs/event.png')} alt="img-event" />
                </div>

                <div data-aos='fade-up' className="event-text">
                    <h2>BALADA HOT</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aspernatur 
                        maiores quia, eligendi amet cum adipisci labore eum sequi omnis dicta blanditiis 
                        ratione ut placeat corrupti possimus, alias quasi temporibus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse deleniti facilis 
                        soluta eos quas nostrum mollitia nobis facere pariatur? Quas possimus at, quibusdam 
                        ex eaque rerum soluta eveniet dolores nam.
                    </p>

                    <a className='btn' href="wa.me/">COMPRE AGORA</a>
                </div>
            </div>
        </main>
    )
}