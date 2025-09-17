function Categoria(){
    return(
        <>
            <section className='w-full flex flex-col items-center mt-[2rem]'>
                <h1 className="font-[500] text-[2rem]">Categorias</h1>
                <div className='w-[994px] flex flex-row justify-between mt-[2rem]'>
                    <div className="flex items-center flex-col mt-[1.5rem] cursor-pointer">
                        <div className='w-[150px] h-[150px] flex items-center justify-center rounded-[100%] border-1 border-solid border-(--color-pink) bg-(--bg-categoria-produto-img) transition duration-400 ease hover:scale-[1.1]'>
                            <img src="../img/umDia.jpg" alt="Imagem da capa do livro Um Dia" className="w-[70px]"/>
                        </div>
                        <h3 className='font-[500] text-[1.2rem] mt-[1rem]'>Romance</h3>
                    </div>
                    <div className="flex items-center flex-col mt-[1.5rem] cursor-pointer">
                        <div className='w-[150px] h-[150px] flex items-center justify-center rounded-[100%] border-1 border-solid border-(--color-pink) bg-(--bg-categoria-produto-img) transition duration-400 ease hover:scale-[1.1]'>
                            <img src="/img/AHoraDaEstrela.jpg" alt="Imagem da capa do livro A Hora da Estrela" className="w-[70px]"/>
                        </div>
                        <h3 className='font-[500] text-[1.2rem] mt-[1rem]'>Clássicos</h3>
                    </div>
                    <div className="flex items-center flex-col mt-[1.5rem] cursor-pointer">
                        <div className='w-[150px] h-[150px] flex items-center justify-center rounded-[100%] border-1 border-solid border-(--color-pink) bg-(--bg-categoria-produto-img) transition duration-400 ease hover:scale-[1.1]'>
                            <img src="../img/misery.jpg" alt="Imagem da capa do livro Misery" className="w-[70px]"/>
                        </div>
                        <h3 className='font-[500] text-[1.2rem] mt-[1rem]'>Thriller</h3>
                    </div>
                    <div className="flex items-center flex-col mt-[1.5rem] cursor-pointer">
                        <div className='w-[150px] h-[150px] flex items-center justify-center rounded-[100%] border-1 border-solid border-(--color-pink) bg-(--bg-categoria-produto-img) transition duration-400 ease hover:scale-[1.1]'>
                            <img src="/img/umaVidaPequena.jpg" alt="Imagem da capa do livro Uma Vida Pequena" className="w-[70px]"/>
                        </div>
                        <h3 className='font-[500] text-[1.2rem] mt-[1rem]'>Ficção</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categoria