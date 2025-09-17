import style from './Skeleton.module.css'

function Skeleton(){

    return(
        <>
            <div className={style.skeletonCard}>
                <div className={style.skeletonContainerImg}></div>
                <div className={style.skeletonProduto}> 
                    <div className={style.skeletonTitulo}></div>
                    <div className={style.skeletonRating}></div>
                    <div className={style.skeletonPrecoButton}></div>
                </div>
            </div>
        </>
    )
}

export default Skeleton