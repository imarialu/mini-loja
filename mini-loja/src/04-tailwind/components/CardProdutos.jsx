import ButtonAdd from './ButtonAdd';
import Rating from './Rating';
import Skeleton from './Skeleton';

import { useState, useEffect } from 'react';

function CardProdutos({imagem, titulo, preco, productRating}){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return(
        <>
            {loading ?
            <Skeleton/>
            :
            <div className='w-[200px] flex items-center flex-col rounded-[15px] bg-(--bg) shadow-[1px_1px_6px] shadow-(--shadow) shadow-md cursor-pointer transition duration-400 ease hover:scale-[1.05]'>
                <div className='w-[150px] h-[190px] flex items-center justify-center mt-[2rem] rounded-[10px] bg-(--bg-categoria-produto-img)'>
                    <img src={imagem} alt="Imagem da capa do livro" className='w-[90px]'/>
                </div>
                <div className='w-[150px] mt-[1rem]'> 
                    <h3 className='m-0 font-[500] text-[1.2rem]'>{titulo.length > 14 ? `${titulo.substring(0, 13)}...` : titulo}</h3>
                    <Rating rating={productRating}/>
                    <div className='w-full h-[1px] mt-[0.5rem] bg-(--bg-pink)'></div>
                    <div className='flex items-center justify-between mt-[1rem] mb-[1rem]'>
                        <p className='font-[500]'>{preco}</p>
                        <ButtonAdd children={'Adicionar'}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CardProdutos