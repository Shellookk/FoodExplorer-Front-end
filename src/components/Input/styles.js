import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  
  >input{
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 0.75rem 0.875rem;
    border-radius: 0.3125rem;
    margin-top: 0.5rem;
  }
  
  &:focus{
    border-color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  
  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`