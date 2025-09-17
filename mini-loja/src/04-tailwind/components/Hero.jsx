

function Hero(){
    return (
        <>
            <section className='w-full h-[450px] flex flex-row mb-[2rem] mt-[4rem]'>
                <div className='w-1/2 flex items-center justify-center flex-col'>
                    <h1 className='text-[5rem] leading-none m-0 text-center font-light mb-[1rem] font-[Gabriela]'>
                        Deixe-se encantar <br/>
                        por cada página
                    </h1>
                    <p className='text-center text-[1.6rem] font-[300] mb-[1rem]'>
                        A <span className='font-[400] text-(--color-pink)'>Book Store</span> vai te ajudar a descobrir histórias <br/>
                        que tocam o coração e despertam a imaginação!
                    </p>
                    <button className="py-[0.5rem] px-[1rem] border-1 border-solid border-(--color-pink) rounded-[30px] text-(--color-pink) bg-(--bg) cursor-pointer transition duration-600 ease hover:text-(--color-text-2) hover:bg-(--bg-pink)">Compre já</button>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src="/img/hero-img.png" alt="Imagem ilustrativa do hero" className="w-[450px] h-[450px]"/>
                </div>
            </section>
        </>
    )
}

export default Hero