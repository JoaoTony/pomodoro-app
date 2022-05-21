import { render, screen } from '@testing-library/react';

import Timer from '.';
import TimerCard from './timer.card';

describe('Timer', () => {
  it('should render timer component correctly', () => {
    render(<Timer />);

    screen.getByTestId('timer');
    screen.getByText('00');
  });

  it('should render timer card component correctly', () => {
    render(<TimerCard text="20" />);

    screen.getByText('20');
  });
});
