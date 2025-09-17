import { AiOutlineMoon } from 'react-icons/ai';
import { AiOutlineSun } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { useTheme } from "../../context/ThemeContext"

function Navbar(){
    const {theme, toggleTheme} = useTheme();

    return(
        <header className='bg-(--bg) fixed top-0 w-full h-[4rem] z-50'>
            <nav className='h-full flex justify-around items-center'>
                <p className='text-[1.5rem] font-[500] font-[Grabriela]'>Book Store</p>
                <input type="text" placeholder="Pesquisar" className='w-[500px] p-[0.5rem] border-hidden rounded-[20px] bg-(--input-nav) focus:outline-none '/>
                <div className='h-full flex items-center justify-between gap-[1rem]'>
                    <button className='flex justify-center p-[0.4rem] border-hidden rounded-[100%] text-(--color-text-2) bg-(--bg-pink) cursor-pointer' onClick={toggleTheme}>
                        {theme === 'light' ? <AiOutlineSun className='w-[25px] h-[25px]'/> : <AiOutlineMoon className='w-[25px] h-[25px]'/>}
                    </button>
                    <button className='p-[0.5rem] border-hidden rounded-[5px] text-(--color-pink) bg-transparent cursor-pointer'><FaCartShopping className='w-[30px] h-[30px]'/></button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar