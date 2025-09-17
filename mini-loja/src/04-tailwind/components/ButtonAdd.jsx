function ButtonAdd({children}){

    return(
        <>
            <button className="p-[0.3rem] text-[0.8rem] rounded-[30px] border-1 border-solid border-(--color-pink) text-(--color-pink) bg-(--bg) transition duration-600 ease hover:text-(--color-text-2) hover:bg-(--bg-pink)">{children}</button>
        </>
    )
}

export default ButtonAdd