import { AiOutlineMoon } from 'react-icons/ai';
import { AiOutlineSun } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { useTheme } from "../../context/ThemeContext"
import styled from 'styled-components'

const Header = styled.header `
    position: fixed;
    top: 0;
    width: 100%;
    height: 4rem;
    background-color: var(--bg-header);
    z-index: 200;
`

const Nav = styled.nav `
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const NavbarP = styled.p `
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Gabriela';
    color: var(--color-pink);

    @media screen and (max-width: 481px){
        font-size: 1rem;
`

const NavbarInput = styled.input `
    width: 500px;
    padding: 0.5rem;
    border: none;
    border-radius: 20px;
    background-color: var(--input-nav);

    &:focus{
        outline: none;
    }    

    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavbarButtons = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`

const ToggleButton = styled.button `
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    border: none;
    border-radius: 100%;
    color: var(--color-text-2);
    background-color: var(--bg-pink);
    cursor: pointer;
`

const IconSun = styled(AiOutlineSun) `
    width: 25px;
    height: 25px;

    @media screen and (max-width: 481px){
        width: 20px;
        height: 20px;
`

const IconMoon = styled(AiOutlineMoon) `
    width: 25px;
    height: 25px;

    @media screen and (max-width: 481px){
        width: 20px;
        height: 20px;
`

const ShopButton = styled.button `
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    color: var(--color-pink);
    background-color: transparent;
    cursor: pointer;
`

const IconShop = styled(FaCartShopping) `
    width: 30px;
    height: 30px;

    @media screen and (max-width: 481px){
        width: 25px;
        height: 25px;
`

function Navbar(){
    const {theme, toggleTheme} = useTheme();

    return(
        <Header>
            <Nav>
                <NavbarP>Book Store</NavbarP>
                <NavbarInput type="text" placeholder="Pesquisar"/>
                <NavbarButtons>
                    <ToggleButton onClick={toggleTheme}>
                        {theme === 'light' ? <IconSun/> : <IconMoon/>}
                    </ToggleButton>
                    <ShopButton><IconShop/></ShopButton>
                </NavbarButtons>
            </Nav>
        </Header>
    )
}

export default Navbar