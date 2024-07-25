import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: 0;
  height: 3.5rem;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: 0.43rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-size: 1rem;
  }

  > svg {
    font-size: 1.37rem;
  }
  font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

  &:hover{
      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};        
    }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }
`;