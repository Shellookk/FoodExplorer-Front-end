import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center ;
    padding: 0.75rem 0rem 0.75rem 0rem;

    border-radius: 0.3125rem;



    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};        
    }

    &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }
`        
