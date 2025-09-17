import ButtonAdd from './ButtonAdd';
import Rating from './Rating';
import Skeleton from './Skeleton';
import style from './CardProdutos.module.css'

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
            <div className={style.card}>
                <div className={style.containerImg}>
                    <img src={imagem} alt="Imagem da capa do livro" />
                </div>
                <div className={style.produto}> 
                    <h3>{titulo.length > 14 ? `${titulo.substring(0, 13)}...` : titulo}</h3>
                    <Rating rating={productRating}/>
                    <div className={style.linha}></div>
                    <div className={style.precoButton}>
                        <p>{preco}</p>
                        <ButtonAdd children={'Adicionar'}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CardProdutos