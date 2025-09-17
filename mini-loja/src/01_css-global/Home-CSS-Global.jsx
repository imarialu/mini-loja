import './style.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Categoria from './components/Categoria'
import CardProdutos from './components/CardProdutos'
import Footer from './components/Footer'

import { FaTruck } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6'; 
import { FaShield } from 'react-icons/fa6';

function Home(){
    return(
        <>
            {/* Componente com o navbar do site */}
            <Navbar/>
            
            <main id='main'>
                {/* Componente com o hero do site */}
                <Hero/>

                {/* Section com os detaques da loja */}
                <section className='container-infos'>
                    <div className='infos'>
                        <FaTruck className='icon-infos'/>
                        <div className='infos-texto'>
                            <h3>Frete Grátis</h3>
                            <p>Para todo o Brasil!</p>
                        </div>
                    </div>
                    <div className='infos'>
                        <FaCreditCard className='icon-infos'/>
                        <div className='infos-texto'>
                            <h3>Até 3x no Cartão</h3>
                            <p>Ganhe 5% de desconto pagando a vista</p>
                        </div>
                    </div>
                    <div className='infos'>
                        <FaShield className='icon-infos'/>
                        <div className='infos-texto'>
                            <h3>Selo de Segurança</h3>
                            <p>+ de 5.000 envios para todo o Brasil</p>
                        </div>
                    </div>
                </section>

                {/* Componente com a section de categorias */}
                <Categoria/>

                {/* Section com os cards dos produtos */}
                <section className='container-produtos'>
                    <div className='textos'>
                        <h1>Livros Populares</h1>
                        <p>Ver mais</p>
                    </div>
                    <div className='cards-grid'>
                        <CardProdutos imagem='../img/PCD.jpg' titulo='Pequena Coreografia do Adeus' preco='R$ 54,90' productRating={5}/>
                        <CardProdutos imagem='../img/jogosVorazes.jpg' titulo='Jogos Vorazes' preco='R$ 39,90' productRating={4}/>
                        <CardProdutos imagem='../img/antesQueOCafeEsfrie.jpg' titulo='Antes que o Café Esfrie' preco='R$ 35,00' productRating={5}/>
                        <CardProdutos imagem='../img/OSMEH.jpg' titulo='Os Sete Maridos de Evelyn Hugo' preco='R$ 30,00' productRating={4}/>
                        <CardProdutos imagem='../img/diarioDeUmaPaixao.jpg' titulo='Diário de uma Paixão' preco='R$ 59,90' productRating={0}/>
                        <CardProdutos imagem='../img/senhorDosAneis.jpg' titulo='Senhor dos Anéis' preco='R$ 35,00' productRating={5}/>
                        <CardProdutos imagem='../img/depois.jpg' titulo='Depois' preco='R$ 29,90' productRating={3}/>
                        <CardProdutos imagem='../img/aPacienteSilenciosa.jpg' titulo='A Paciente Silenciosa' preco='R$ 30,00' productRating={3}/>
                    </div>
                </section>
            </main>

            {/* Footer do site */}
            <Footer/>
        </>
    )
}

export default Home