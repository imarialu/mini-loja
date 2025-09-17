import ButtonAdd from './ButtonAdd';
import Rating from './Rating';
import Skeleton from './Skeleton';
import styled from 'styled-components'

const CardProduto = styled.div `
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 1px 1px 8px var(--shadow);
    background-color: var(--bg);
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover{
        transform: scale(1.05);
    }

`
const CardImg = styled.div `
    width: 150px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    border-radius: 10px;
    background-color: var(--bg-categoria-produto-img);
`
const ProdutoImg = styled.img `
    width: 90px;
`
const ProdutoInfos = styled.div `
    width: 150px;
    margin-top: 1rem;
`
const Titulo = styled.h3 `
    margin: 0;
    font-weight: 500;
`
const Linha = styled.div `
    width: 100%;
    height: 1px;
    margin-top: 0.5rem;
    background-color: var(--bg-pink);
`
const Preco_Button = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.4rem 0;
`
const Preco = styled.p `
    font-weight: 500;
`



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
            <CardProduto>
                <CardImg>
                    <ProdutoImg src={imagem} alt="Imagem da capa do livro" />
                </CardImg>
                <ProdutoInfos> 
                    <Titulo>{titulo.length > 14 ? `${titulo.substring(0, 13)}...` : titulo}</Titulo>
                    <Rating rating={productRating}/>
                    <Linha></Linha>
                    <Preco_Button>
                        <Preco>{preco}</Preco>
                        <ButtonAdd children={'Adicionar'}/>
                    </Preco_Button>
                </ProdutoInfos>
            </CardProduto>}
        </>
    )
}

export default CardProdutos