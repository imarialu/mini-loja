import { useTheme } from "../../context/ThemeContext"
import style from './Navbar.module.css'

import { AiOutlineMoon } from 'react-icons/ai';
import { AiOutlineSun } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';

function Navbar(){
    const {theme, toggleTheme} = useTheme();

    return(
        <header className={style.header}>
            <nav className={style.navbar}>
                <p>Book Store</p>
                <input type="text" placeholder="Pesquisar"/>
                <div className={style.icons}>
                    <button className={style.themeButton} onClick={toggleTheme}>
                        {theme === 'light' ? <AiOutlineSun className={style.themeIcon}/> : <AiOutlineMoon className={style.themeIcon}/>}
                    </button>
                    <button className={style.shopButton}><FaCartShopping className={style.shopIcon}/></button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar