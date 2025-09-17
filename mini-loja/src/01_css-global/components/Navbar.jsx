import { AiOutlineMoon } from 'react-icons/ai';
import { AiOutlineSun } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { useTheme } from "../../context/ThemeContext"

function Navbar(){
    const {theme, toggleTheme} = useTheme();

    return(
        <header className='header'>
            <nav className='navbar'>
                <p>Book Store</p>
                <input type="text" placeholder="Pesquisar"/>
                <div className='icons'>
                    <button id='theme-button' onClick={toggleTheme}>
                        {theme === 'light' ? <AiOutlineSun className='icon-theme'/> : <AiOutlineMoon className='icon-theme'/>}
                    </button>
                    <button id='shop-button'><FaCartShopping id='icon-shop'/></button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar