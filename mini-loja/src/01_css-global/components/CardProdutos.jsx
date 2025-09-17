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
            <div className='card'>
                <div className='container-img'>
                    <img src={imagem} alt="Imagem da capa do livro" />
                </div>
                <div className='produto'> 
                    <h3>{titulo.length > 14 ? `${titulo.substring(0, 13)}...` : titulo}</h3>
                    <Rating rating={productRating}/>
                    <div id='linha'></div>
                    <div className='preco-button'>
                        <p>{preco}</p>
                        <ButtonAdd children={'Adicionar'}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CardProdutos