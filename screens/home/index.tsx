import { FC } from 'react';
import { Header, Timer } from '@/components/index';

import { Container } from './home.styles';

const Home: FC = () => (
  <Container>
    <Header />
    <Timer />
  </Container>
);

export default Home;
