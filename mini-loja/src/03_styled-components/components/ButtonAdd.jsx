import styled from 'styled-components'
 
const Button = styled.button `
    padding: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid var(--color-pink);
    color: var(--color-pink);
    background-color: var(--bg);
    transition: background-color 0.6s ease;

    &:hover{
        color: var(--color-text-2);
        background-color: var(--bg-pink);
    }
`

function ButtonAdd({children}){

    return(
        <>
            <Button>{children}</Button>
        </>
    )
}

export default ButtonAdd