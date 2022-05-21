import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors?.subtitle};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 10px;
`;

export const TimerText = styled.p`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors?.subtitle};
`;
