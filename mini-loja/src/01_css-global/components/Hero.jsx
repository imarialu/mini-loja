function Hero(){
    return (
        <>
            <section className='container-hero'>
                <div className='hero-texto'>
                    <h1>
                        Deixe-se encantar <br/>
                        por cada página
                    </h1>
                    <p>
                        A <span id="nome-loja">Book Store</span> vai te ajudar a descobrir histórias <br/>
                        que tocam o coração e despertam a imaginação!
                    </p>
                    <button id="hero-button">Compre já</button>
                </div>
                <div className="hero-img">
                    <img src="/img/hero-img.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero