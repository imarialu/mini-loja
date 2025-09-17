import styled from "styled-components"

const SkeletonCard = styled.div `
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 1px 1px 8px var(--bg-skeleton);
`

const SkeletonImg = styled.div `
    width: 150px;
    height: 190px;
    margin-top: 2rem;
    border-radius: 10px;
    background-color: var(--bg-skeleton);
`

const SkeletonProduto = styled.div `
    width: 150px;
    margin-top: 1rem;
`

const SkeletonTitulo = styled.div `
    width: 150px;
    height: 1rem;
    border-radius: 20px;
    background-color: var(--bg-skeleton);
`

const SkeletonRating = styled.div `
    width: 100px;
    height: 1rem;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: var(--bg-skeleton);
`

const SkeletonPreco= styled.div `
    width: 150px;
    height: 2rem;
    margin-top: 2.2rem;
    margin-bottom: 1.5rem;
    border-radius: 15px;
    background-color: var(--bg-skeleton);
`

function Skeleton(){

    return(
        <>
            <SkeletonCard>
                <SkeletonImg></SkeletonImg>
                <SkeletonProduto> 
                    <SkeletonTitulo></SkeletonTitulo>
                    <SkeletonRating></SkeletonRating>
                    <SkeletonPreco></SkeletonPreco>
                </SkeletonProduto>
            </SkeletonCard>
        </>
    )
}

export default Skeleton