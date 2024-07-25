import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > div img {
        width: 20.2413rem;
        height: 2.9863rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: center;
        justify-content: center;

        margin-right:2.9375rem ;
        >#imagem{
            margin-bottom: 4.5625rem;
            margin-top: 9.875rem;
        }
    }
    
`

export const Form = styled.form`
    padding: 4rem;
    width: 29.75rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;

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

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        background-color: transparent;
        align-content: center;

  }
`