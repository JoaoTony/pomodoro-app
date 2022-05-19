import { FC } from 'react';
import Switch from 'react-switch';

import { Container, Logo } from './header.styles';

import { useAppContex } from '../../context';

const Header: FC = () => {
  const { theme, toggleTheme } = useAppContex();

  return (
    <Container>
      <Logo>PomodoroApp</Logo>
      <Switch
        onChange={() => toggleTheme()}
        checked={theme.title === 'DARK'}
      />
    </Container>
  );
};

export default Header;
