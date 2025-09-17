function Footer(){
    return(
        <>
            <div className='footer'>
                <div className='container-footer'>
                    <div className='footer-logo'>
                        <img src="/public/logo-footer.png" alt="Logo da loja" />
                    </div>
                    <div className='footer-infos'>
                        <div id="sobre">
                            <h3>Saiba mais sobre</h3>
                            <p>Meu Cadastro</p>
                            <p>Quem Somos</p>
                            <p>Nossas Lojas</p>
                            <p>Trocas e Devoluções</p>
                            <p>Formas de Pagamento</p>
                        </div>
                        <div id="contato">
                            <h3>Entre em contato</h3>
                            <p>(00) 00000-0000</p>
                            <p>bookstore@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='direitos'>
                &copy; 2025 Book Store. Todos os direitos reservados.
            </div>
        </>
    )
}

export default Footer