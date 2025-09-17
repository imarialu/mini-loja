function Categoria(){
    return(
        <>
            <section className='container-categoria'>
                <h1>Categorias</h1>
                <div className='card-categorias'>
                    <div className="categoria">
                        <div className='categoria-img'>
                            <img src="../img/umDia.jpg" alt="Imagem da capa do livro Um Dia" />
                        </div>
                        <h3>Romance</h3>
                    </div>
                    <div className="categoria">
                        <div className='categoria-img'>
                            <img src="/img/AHoraDaEstrela.jpg" alt="" />
                        </div>
                        <h3>Clássicos</h3>
                    </div>
                    <div className="categoria">
                        <div className='categoria-img'>
                            <img src="../img/misery.jpg" alt="" />
                        </div>
                        <h3>Thriller</h3>
                    </div>
                    <div className="categoria">
                        <div className='categoria-img'>
                            <img src="/img/umaVidaPequena.jpg" alt="" />
                        </div>
                        <h3>Ficção</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categoria