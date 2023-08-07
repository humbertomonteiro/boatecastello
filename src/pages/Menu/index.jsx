import './menu.css'
import { useState } from 'react'

export default function Menu() {

    const [ drinks, setDrinks ] = useState(true)
    const [ foods, setFoods ] = useState(false)

    function handleDrinks() {
        setDrinks(!drinks)
        setFoods(!foods)
    }

    function handleFoods() {
        setDrinks(!drinks)
        setFoods(!foods)
    }

    return(
        <main className='container-menu'>

            <div className="title">
                <h1 data-aos='fade-left'>CARDÁPIO</h1>
            </div>
            
            <div className="menu">
                <div data-aos='fade-right' className="buttons">

                    <button 
                    onClick={handleDrinks}
                    className={drinks ? 'active' : ''}>
                        BEBIDAS
                    </button>

                    <button
                    onClick={handleFoods}
                    className={foods ? 'active' : ''}>
                        PETISCOS
                    </button>

                </div>

                <div data-aos='fade-up'>
                    {
                        drinks ? 

                        <img src={require('../../assets/imgs/menu.png')} alt="drinks" />

                        : 

                        <img src={require('../../assets/imgs/combo1.png')} alt="drinks" />
                    }
                </div>
            </div>
        </main>
    )
}