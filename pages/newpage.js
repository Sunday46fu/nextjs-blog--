// pages/newpage.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NewPage() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // สุ่มหมายเลขระหว่าง 1 ถึง 100
  }

  const handleGuess = () => {
    const numberGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numberGuess < targetNumber) {
      setMessage('Higher! Try again.');
    } else if (numberGuess > targetNumber) {
      setMessage('Lower! Try again.');
    } else {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
      setTargetNumber(generateRandomNumber());
      setAttempts(0);
    }

    setGuess('');
  };

  return (
    <>
      <Head>
        <title>Guess the Number Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>Guess the Number Game!</h1>
        <p>Guess a number between 1 and 100:</p>
        <input
          style={styles.input}
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button style={styles.button} onClick={handleGuess}>
          Guess
        </button>
        {message && <p style={styles.message}>{message}</p>}
        <Link href="/" passHref>
          <button style={styles.homeButton}>Go to Home Page</button>
        </Link>
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
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
  input: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    fontSize: '1.5rem',
    color: '#d9534f', // ใช้สีแดงสำหรับข้อความ
  },
  homeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
