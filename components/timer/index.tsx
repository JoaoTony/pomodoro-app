/* eslint-disable react/no-array-index-key */
import {
  FC, useEffect, useState, useCallback,
} from 'react';

import { Container } from './timer.styles';

import TimerCard from './timer.card';

const INITIAL_TIME_IN_SECONDS = 25 * 60;

const Timer: FC = () => {
  const [time, setTime] = useState(INITIAL_TIME_IN_SECONDS);

  const handleTimer = useCallback(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
  }, [time]);

  useEffect(() => {
    handleTimer();
  }, [time]);

  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  return (
    <Container data-testid="timer">
      <TimerCard text={min.toString().padStart(2, '0')} />
      <TimerCard text={sec.toString().padStart(2, '0')} />
    </Container>
  );
};

export default Timer;
