import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ไงเพื่อน</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>ไงเพื่อน</h1>
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
};
