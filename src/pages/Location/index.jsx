import './location.css'

export default function Location() {
    return(
        <main className='container-location'>
            
            <div className="title">
                <h1 data-aos='fade-left'>Localização</h1>
            </div>

            <div className="location">
                <div data-aos='fade-down'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4016051029766!2d-38.520432390457216!3d-3.722277643123322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7499a1660c873%3A0x2ec6f004c6cd295d!2sCASTELLO%20BOATE!5e0!3m2!1spt-BR!2sbr!4v1691279512568!5m2!1spt-BR!2sbr"></iframe>
                </div>
                <div data-aos='fade-up' className="location-text">
                    <h2>MELHOR LOCALIZAÇÃO</h2>
                
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero cumque numquam blanditiis consectetur quo atque praesentium, nemo ipsam ducimus velit accusamus, commodi quisquam, minus molestias dolorem aliquam quia suscipit!
                    </p>
                    <a
                    href="https://www.google.com.br/maps/place/CASTELLO+BOATE/@-3.7222776,-38.5204324,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7499a1660c873:0x2ec6f004c6cd295d!8m2!3d-3.722283!4d-38.5178521!16s%2Fg%2F11t7c1hsg0?entry=ttu"
                    target='_blank' 
                    rel="noreferrer"
                    className='btn'>IR AGORA</a>
                </div>
            </div>
        </main>
    )
}