import type { NextPage } from 'next';
import Head from 'next/head';

import HomePage from '../screens/home';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Pomodoro App</title>
      <meta name="description" content="Simple Pomodor timer app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </div>
);

export default Home;
