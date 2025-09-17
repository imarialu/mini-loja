import style from './Hero.module.css'

function Hero(){
    return (
        <>
            <section className={style.heroContainer}>
                <div className={style.heroTexto}>
                    <h1>
                        Deixe-se encantar <br/>
                        por cada página
                    </h1>
                    <p>
                        A <span className={style.nomeLoja}>Book Store</span> vai te ajudar a descobrir histórias <br/>
                        que tocam o coração e despertam a imaginação!
                    </p>
                    <button className={style.heroButton}>Compre já</button>
                </div>
                <div className={style.heroImg}>
                    <img src="/img/hero-img.png" alt="Imagem ilustrativa utilizada no Hero" />
                </div>
            </section>
        </>
    )
}

export default Hero