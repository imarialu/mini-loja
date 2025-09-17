import '../tailwind.css'
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
            
            <main className='bg-(--bg)'>
                {/* Componente com o hero do site */}
                <Hero/>

                {/* Section com os detaques da loja */}
                <section className='w-full flex justify-center gap-[12rem] py-[1rem] px-0 bg-(--bg-pink)'>
                    <div className='w-[200px] text-center text-(--color-text-2)'>
                        <FaTruck className='w-[20px] h-[20px] mx-auto'/>
                        <div className='mt-[0.8rem]'>
                            <h3 className='m-0 font-bold'>Frete Grátis</h3>
                            <p className='mt-[0.2rem]'>Para todo o Brasil!</p>
                        </div>
                    </div>
                    <div className='w-[200px] text-center text-(--color-text-2)'>
                        <FaCreditCard className='w-[20px] h-[20px] mx-auto'/>
                        <div className='mt-[0.8rem]'>
                            <h3 className='m-0 font-bold'>Até 3x no Cartão</h3>
                            <p className='mt-[0.2rem]'>Ganhe 5% de desconto pagando a vista</p>
                        </div>
                    </div>
                    <div className='w-[200px] text-center text-(--color-text-2)'>
                        <FaShield className='w-[20px] h-[20px] mx-auto'/>
                        <div className='mt-[0.8rem]'>
                            <h3 className='m-0 font-bold'>Selo de Segurança</h3>
                            <p className='mt-[0.2rem]'>+ de 5.000 envios para todo o Brasil</p>
                        </div>
                    </div>
                </section>

                {/* Componente com a section de categorias */}
                <Categoria/>

                {/* Section com os cards dos produtos */}
                <section className='w-full flex items-center justify-center flex-col mt-[6rem]'>
                    <div className='w-[994px] h-[2rem] flex items-center justify-between'>
                        <h1 className='font-[500] text-[2rem]'>Livros Populares</h1>
                        <p className='text-[1.2rem] text-(--color-pink) cursor-pointer'>Ver mais</p>
                    </div>
                    <div className='grid grid-cols-4 gap-[4rem] mt-[3rem] mb-[6rem]'>
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