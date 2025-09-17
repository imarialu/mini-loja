import style from './Footer.module.css'

function Footer(){
    return(
        <>
            <div className={style.footer}>
                <div className={style.footerContainer}>
                    <div className={style.footerLogo}>
                        <img src="/public/logo-footer.png" alt="Logo da loja" />
                    </div>
                    <div className={style.footerInfos}>
                        <div className={style.sobre}>
                            <h3>Saiba mais sobre</h3>
                            <p>Meu Cadastro</p>
                            <p>Quem Somos</p>
                            <p>Nossas Lojas</p>
                            <p>Trocas e Devoluções</p>
                            <p>Formas de Pagamento</p>
                        </div>
                        <div className={style.contato}>
                            <h3>Entre em contato</h3>
                            <p>(00) 00000-0000</p>
                            <p>bookstore@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.direitos}>
                &copy; 2025 Book Store. Todos os direitos reservados.
            </div>
        </>
    )
}

export default Footer