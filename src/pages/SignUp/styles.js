import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;

    #imagem{
        width: 20.2413rem;
        height: 2.9863rem;
        margin-top: 21.3125rem;
    }

    > div img {
        width: 20.2413rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        align-items: center;

        >div img{
            margin-top: 9.875rem;
        }
  }
    
`

export const Form = styled.form`
    width: 29.75rem;
    height: 38.8125rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    margin-top: 5.6325rem;
    margin-bottom: 7rem;
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

        margin-bottom: 21.1875rem;
        padding: 0 ;
        padding-left: 4.0625rem;
        padding-right: 2.9375rem;
  }
`