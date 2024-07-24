import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;

    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    > div {
        display: flex;
        gap: 0.625rem;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        font-weight: bold;        
    } 
`