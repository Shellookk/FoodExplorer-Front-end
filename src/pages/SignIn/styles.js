import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;

    > div img {
        width: 20.2413rem;
        height: 2.9863rem;
        margin-top: 21.3125rem;
    }
`

export const Form = styled.form`
    padding: 4rem;
    height: 33.7975rem;
    width: 29.75rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    margin-top: 8.8825rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    > h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    >  #form label{
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > #form Input {
        margin-bottom: 2rem;
    }

    > #Entrar{
        margin-bottom: 2rem;
    }
`