import style from './ButtonAdd.module.css'

function ButtonAdd({children}){

    return(
        <>
            <button className={style.buttonAdd}>{children}</button>
        </>
    )
}

export default ButtonAdd