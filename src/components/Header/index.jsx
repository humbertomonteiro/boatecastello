import './header.css'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'

export default function Header() {

    const [ showMenu, setShowMenu ] = useState(false)

    function handleShowMenu() {
        setShowMenu(!showMenu)
    }   

    return (
        <header>
            <Link 
            className='logo' 
            to='/'>Castello</Link>

            <nav className={showMenu ? 'navbar navbarMobile' : 'navbar'}>
                <Link onClick={handleShowMenu} to='/'>Home</Link>
                <Link onClick={handleShowMenu} to='/events'>Eventos</Link>
                <Link onClick={handleShowMenu} to='/location'>Localização</Link>
                <Link onClick={handleShowMenu} to='/menu'>Cardápio</Link>
                <Link onClick={handleShowMenu} to='/contacts'>Contatos</Link>
            </nav>

            <HiBars3BottomRight onClick={handleShowMenu}/>
        </header>
    )
}