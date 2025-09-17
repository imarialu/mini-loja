import styled from 'styled-components'

const HeroContainer = styled.section `
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: row;
    margin-top: 4rem;

    @media screen and (max-width: 768px){
        height: 750px;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (max-width: 481px){
        height: 450px;
` 

const HeroTexto = styled.div `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 3rem;
`

const HeroTitulo = styled.h1 `
    font-size: 3.5rem;
    line-height: 1;
    margin: 0;
    text-align: center;
    font-weight: lighter;
    font-family: 'Gabriela';

    @media screen and (max-width: 1024px) {
        font-size: 2.8rem;
    }

    @media screen and (max-width: 481px){
        font-size: 1.6rem;
    }
`

const HeroP = styled.p `
    text-align: center;
    font-size: 1.4rem;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 481px){
        font-size: 0.7rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`

const NomeLoja = styled.span `
    font-weight: 400;
    color: var(--color-pink);
`

const HeroButton = styled.button `
    padding: 0.7rem 1rem;
    border: 1px solid var(--color-pink);
    border-radius: 20px;
    color: var(--color-pink);
    background-color: var(--bg);
    cursor: pointer;
    transition: background-color 0.6s ease;

    &:hover{
        color: var(--color-text-2);
        background-color: var(--bg-pink);
    }

    @media screen and (max-width: 481px){
        padding: 0.4rem;
        font-size: 0.8rem;
`

const ImgContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
`

const HeroImg = styled.img `
    width: 450px;
    height: 450px;

    @media screen and (max-width: 1024px) {
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 481px){
        width: 200px;
        height: 200px;
    }
`

function Hero(){
    return (
        <>
            <HeroContainer>
                <HeroTexto>
                    <HeroTitulo>
                        Deixe-se encantar <br/>
                        por cada página
                    </HeroTitulo>
                    <HeroP>
                        A <NomeLoja id="nome-loja">Book Store</NomeLoja> vai te ajudar a descobrir histórias <br/>
                        que tocam o coração e despertam a imaginação!
                    </HeroP>
                    <HeroButton id="hero-button">Compre já</HeroButton>
                </HeroTexto>
                <ImgContainer className="hero-img">
                    <HeroImg src="/img/hero-img.png" alt="imagem ilustrativa utilizada no Hero" />
                </ImgContainer>
            </HeroContainer>
        </>
    )
}

export default Hero