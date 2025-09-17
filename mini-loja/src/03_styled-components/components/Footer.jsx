import styled from 'styled-components'

const FooterSec = styled.footer `
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-pink);

    @media screen and (max-width: 768px) {
        height: 350px;
    }

    @media screen and (max-width: 481px) {
        height: 550px;
    }
`

const FooterContainer =styled.div `
    width: 80%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
    }
`

const FooterLogo = styled.div `
    width: 50%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

const LogoImg = styled.img `
    width: 150px;
    height: 150px;
    margin-left: 5rem;

    @media screen and (max-width: 1024px) {
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

const FooterInfos = styled.div `
    width: 50%;
    height: 220px;
    display: flex;
    justify-content: space-around;
    color: var(--color-text-2);

    @media screen and (max-width: 768px) {
        width: 100%;
        gap: 2rem;
        justify-content: center;
    }

    @media screen and (max-width: 481px) {
        width: 100%;
        height: 350px;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`

const InfosTitulo = styled.h3`
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`

const InfosP = styled.p `
    margin-top: 0;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 300;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const SobreP = styled.p `
    margin-top: 0;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 300;
    cursor: pointer;

    &:hover{
        color: var(--color-text);
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const Direitos = styled.div `
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    background-color: var(--bg-direitos);

    @media screen and (max-width: 481px) {
        font-size: 0.6rem;
    }
`

function Footer(){
    return(
        <>
            <FooterSec>
                <FooterContainer>
                    <FooterLogo>
                        <LogoImg src="/public/logo-footer.png" alt="Logo da loja" />
                    </FooterLogo>
                    <FooterInfos>
                        <div>
                            <InfosTitulo>Saiba mais sobre</InfosTitulo>
                            <SobreP>Meu Cadastro</SobreP>
                            <SobreP>Quem Somos</SobreP>
                            <SobreP>Nossas Lojas</SobreP>
                            <SobreP>Trocas e Devoluções</SobreP>
                            <SobreP>Formas de Pagamento</SobreP>
                        </div>
                        <div>
                            <InfosTitulo>Entre em contato</InfosTitulo>
                            <InfosP>(00) 00000-0000</InfosP>
                            <InfosP>bookstore@gmail.com</InfosP>
                        </div>
                    </FooterInfos>
                </FooterContainer>
            </FooterSec>
            <Direitos>
                &copy; 2025 Book Store. Todos os direitos reservados.
            </Direitos>
        </>
    )
}

export default Footer