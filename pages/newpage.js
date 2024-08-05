
// pages/newpage.js
import Head from 'next/head';

export default function NewPage() {
  return (
    <>
      <Head>
        <title>New Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>This is the new page!</h1>
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
