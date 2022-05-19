import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Pomodoro App</title>
      <meta name="description" content="Simple Pomodor timer app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Hello World</h1>
  </div>
);

export default Home;
