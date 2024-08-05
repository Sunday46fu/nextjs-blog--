import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={styles.main}>
        <button style={styles.button}>Get Start</button>
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
  button: {
    padding: '15px 30px',
    fontSize: '1.5rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    outline: 'none',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
};

// Add event listeners for button hover effect
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = styles.buttonHover.backgroundColor;
      button.style.transform = styles.buttonHover.transform;
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = styles.button.backgroundColor;
      button.style.transform = 'none';
    });
  });
    }
