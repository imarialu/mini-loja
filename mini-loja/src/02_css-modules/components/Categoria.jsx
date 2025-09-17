import style from './Categoria.module.css'

function Categoria(){
    return(
        <>
            <section className={style.categoriaContainer}>
                <h1>Categorias</h1>
                <div className={style.cardCategorias}>
                    <div className={style.categoria}>
                        <div className={style.categoriaImg}>
                            <img src="../img/umDia.jpg" alt="Imagem da capa do livro Um Dia" />
                        </div>
                        <h3>Romance</h3>
                    </div>
                    <div className={style.categoria}>
                        <div className={style.categoriaImg}>
                            <img src="/img/AHoraDaEstrela.jpg" alt="Imagem da capa do livro A Hora da Estrela" />
                        </div>
                        <h3>Clássicos</h3>
                    </div>
                    <div className={style.categoria}>
                        <div className={style.categoriaImg}>
                            <img src="../img/misery.jpg" alt="Imagem da capa do livro Misery" />
                        </div>
                        <h3>Thriller</h3>
                    </div>
                    <div className={style.categoria}>
                        <div className={style.categoriaImg}>
                            <img src="/img/umaVidaPequena.jpg" alt="Imagem da capa do livro Uma Vida Pequena" />
                        </div>
                        <h3>Ficção</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categoria