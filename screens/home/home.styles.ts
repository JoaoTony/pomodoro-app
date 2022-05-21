import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors?.backgroundColor};
  color:  ${({ theme }) => theme.colors.title};

  transition: all ease 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
