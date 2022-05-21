/* eslint-disable import/extensions */
import { FC } from 'react';
import Switch from 'react-switch';

import { useAppContext } from '@/context/index';
import { Container, Logo } from './header.styles';

const Header: FC = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <Container>
      <Logo>PomodoroApp</Logo>
      <Switch
        data-testid="switcher"
        onChange={() => toggleTheme()}
        checked={theme.title === 'DARK'}
      />
    </Container>
  );
};

export default Header;
