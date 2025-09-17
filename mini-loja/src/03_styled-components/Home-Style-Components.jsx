import styled from 'styled-components'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Categoria from './components/Categoria'
import CardProdutos from './components/CardProdutos'
import Footer from './components/Footer'

import { FaTruck } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6'; 
import { FaShield } from 'react-icons/fa6';

// Estilização do main
const Main = styled.main `
     background-color: var(--bg);
`

// Estilização da section com destaques
const InfosContainer = styled.section `
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12rem;
    padding: 1rem 0;
    background-color: var(--bg-pink);

    @media screen and (max-width: 1024px) {
        gap: 5rem;
    }

    @media screen and (max-width: 768px) {
        gap: 1.5rem;
    }

    @media screen and (max-width: 481px) {
        align-items: center;
        flex-direction: column;
    }
`

const Infos = styled.div `
    width: 200px;
    text-align: center;
    border-radius: 20px;
    color: var(--color-text-2);

    @media screen and (max-width: 768px) {
        width: 150px;
    }
`

const InfosTexto = styled.div `
    margin-top: 0.8rem;
`

const IconTruck = styled(FaTruck) `
    width: 20px;
    height: 20px;
`

const IconCreditCard = styled(FaCreditCard) `
    width: 20px;
    height: 20px;
`

const IconShield = styled(FaShield) `
    width: 20px;
    height: 20px;
`

const InfoTitulo = styled.h3 `
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const InfoP = styled.p `
    margin-top: 0.2rem; 

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`

// Estilização da section dos cards dos produtos
const ProdutosContainer = styled.section `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 6rem;
`
const Textos = styled.div `
    width: 994px;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        width: 728px;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`
const Produtosh1 = styled.h1 `
    font-weight: 500;

    @media screen and (max-width: 481px) {
        font-size: 1.6rem;
    }
`

const ProdutosLink = styled.p `
    font-size: 1.2rem;
    color: var(--color-pink);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const CardsGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    margin-top: 3rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 4rem;
    }

    @media screen and (max-width: 481px) {
        grid-template-columns: 1fr;
    }

`

function Home(){
    return(
        <>
            {/* Componente com o navbar do site */}
            <Navbar/>
            
            <Main>
                {/* Componente com o hero do site */}
                <Hero/>

                {/* Section com os detaques da loja */}
                <InfosContainer>
                    <Infos>
                        <IconTruck/>
                        <InfosTexto>
                            <InfoTitulo>Frete Grátis</InfoTitulo>
                            <InfoP>Para todo o Brasil!</InfoP>
                        </InfosTexto>
                    </Infos>
                    <Infos>
                        <IconCreditCard/>
                        <InfosTexto>
                            <InfoTitulo>Até 3x no Cartão</InfoTitulo>
                            <InfoP>Ganhe 5% de desconto pagando a vista</InfoP>
                        </InfosTexto>
                    </Infos>
                    <Infos>
                        <IconShield/>
                        <InfosTexto>
                            <InfoTitulo>Selo de Segurança</InfoTitulo>
                            <InfoP>+ de 5.000 envios para todo o Brasil</InfoP>
                        </InfosTexto>
                    </Infos>
                </InfosContainer>

                {/* Componente com a section de categorias */}
                <Categoria/>

                {/* Section com os cards dos produtos */}
                <ProdutosContainer>
                    <Textos>
                        <Produtosh1>Livros Populares</Produtosh1>
                        <ProdutosLink>Ver mais</ProdutosLink>
                    </Textos>
                    <CardsGrid>
                        <CardProdutos imagem='../img/PCD.jpg' titulo='Pequena Coreografia do Adeus' preco='R$ 54,90' productRating={5}/>
                        <CardProdutos imagem='../img/jogosVorazes.jpg' titulo='Jogos Vorazes' preco='R$ 39,90' productRating={4}/>
                        <CardProdutos imagem='../img/antesQueOCafeEsfrie.jpg' titulo='Antes que o Café Esfrie' preco='R$ 35,00' productRating={5}/>
                        <CardProdutos imagem='../img/OSMEH.jpg' titulo='Os Sete Maridos de Evelyn Hugo' preco='R$ 30,00' productRating={4}/>
                        <CardProdutos imagem='../img/diarioDeUmaPaixao.jpg' titulo='Diário de uma Paixão' preco='R$ 59,90' productRating={0}/>
                        <CardProdutos imagem='../img/senhorDosAneis.jpg' titulo='Senhor dos Anéis' preco='R$ 35,00' productRating={5}/>
                        <CardProdutos imagem='../img/depois.jpg' titulo='Depois' preco='R$ 29,90' productRating={3}/>
                        <CardProdutos imagem='../img/aPacienteSilenciosa.jpg' titulo='A Paciente Silenciosa' preco='R$ 30,00' productRating={3}/>
                    </CardsGrid>
                </ProdutosContainer>
            </Main>

            {/* Footer do site */}
            <Footer/>
        </>
    )
}

export default Home