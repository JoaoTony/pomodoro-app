import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 10%;

  @media(min-width: 750px) {
    padding: 0 20%;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors?.title};
`;
