import { FC } from 'react';

import { Container, TimerText } from './timer.card.styles';

const TimerCard: FC<{ text: string}> = ({ text }) => (
  <Container>
    <TimerText>{text}</TimerText>
  </Container>
);

export default TimerCard;
