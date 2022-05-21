import { render, screen, fireEvent } from '@testing-library/react';

import { AppContextProvider } from '@/context/index';

import Header from '.';

describe('Header Component', () => {
  it('Should render Header Component correctily', () => {
    const { getByText } = render(
      <Header />,
    );

    getByText('PomodoroApp');
  });

  test('Should toggle Theme', () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const switcher = screen.getByTestId('switcher');

    expect(switcher).toHaveProperty('checked', false);

    fireEvent.click(switcher);

    expect(switcher).toHaveProperty('checked', true);
  });
});
