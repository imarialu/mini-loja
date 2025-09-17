import styled from 'styled-components'

const CategoriaContainer = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    @media screen and (max-width: 481px){
        display: none;
    }
`

const CategoriaTitulo = styled.h1 `
    font-weight: 500;

    @media screen and (max-width: 481px) {
        font-size: 1.6rem;
    }
`

const CardCategoria = styled.div `
    width: 994px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        width: 728px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: space-around;
    }
`

const Categorias = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
    cursor: pointer;
`

const ContainerImg = styled.div `
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid var(--color-pink);
    background-color: var(--bg-categoria-produto-img);
    transition: all 0.4s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px){
        width: 100px;
        height: 100px;
    }
`

const CategoriaImg = styled.img `
    width: 70px;

    @media screen and (max-width: 768px){
        width: 45px;
    }
`

const CategoriaGenero = styled.h3 `
    font-weight: 500;
`


function Categoria(){
    return(
        <>
            <CategoriaContainer>
                <CategoriaTitulo>Categorias</CategoriaTitulo>
                <CardCategoria>
                    <Categorias>
                        <ContainerImg>
                            <CategoriaImg src="../img/umDia.jpg" alt="Imagem da capa do livro Um Dia" />
                        </ContainerImg>
                        <CategoriaGenero>Romance</CategoriaGenero>
                    </Categorias>
                    <Categorias>
                        <ContainerImg>
                            <CategoriaImg src="/img/AHoraDaEstrela.jpg" alt="Imagem da capa do livro A Hora da Estrela" />
                        </ContainerImg>
                        <CategoriaGenero>Clássicos</CategoriaGenero>
                    </Categorias>
                    <Categorias>
                        <ContainerImg>
                            <CategoriaImg src="../img/misery.jpg" alt="Imagem da capa do livro Misery" />
                        </ContainerImg>
                        <CategoriaGenero>Thriller</CategoriaGenero>
                    </Categorias>
                    <Categorias>
                        <ContainerImg>
                            <CategoriaImg src="/img/umaVidaPequena.jpg" alt="Imagem da capa do livro Uma Vida Pequena" />
                        </ContainerImg>
                        <CategoriaGenero>Ficção</CategoriaGenero>
                    </Categorias>
                </CardCategoria>
            </CategoriaContainer>
        </>
    )
}

export default Categoria