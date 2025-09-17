function Footer(){
    return(
        <>
            <div className='w-full h-[300px] flex items-center justify-center bg-(--bg-pink)'>
                <div className='w-[80%] flex justify-around'>
                    <div className='w-1/2 flex items-center'>
                        <img src="/public/logo-footer.png" alt="Logo da loja" className="w-[150px] h-[150px] ml-[5rem]"/>
                    </div>
                    <div className='w-1/2 h-[220px] flex justify-around text-(--color-text-2)'>
                        <div>
                            <h3 className='mb-[0.8rem] text-[1.4rem] font-[500]'>Saiba mais sobre</h3>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300] cursor-pointer hover:text-(--color-text)'>Meu Cadastro</p>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300] cursor-pointer hover:text-(--color-text)'>Quem Somos</p>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300] cursor-pointer hover:text-(--color-text)'>Nossas Lojas</p>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300] cursor-pointer hover:text-(--color-text)'>Trocas e Devoluções</p>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300] cursor-pointer hover:text-(--color-text)'>Formas de Pagamento</p>
                        </div>
                        <div>
                            <h3 className='mb-[0.8rem] text-[1.4rem] font-[500]'>Entre em contato</h3>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300]'>(00) 00000-0000</p>
                            <p className='mt-0 mb-[0.4rem] text-[1.2rem] font-[300]'>bookstore@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[2.5rem] flex items-center justify-center text-(--color-text-2) bg-(--bg-direitos)'>
                &copy; 2025 Book Store. Todos os direitos reservados.
            </div>
        </>
    )
}

export default Footer