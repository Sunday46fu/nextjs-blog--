// pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add hover effect for button
    const button = document.querySelector('button');
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'rgba(255,94,247,0.8)';
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#100720';
      button.style.transform = 'none';
    });

    return () => {
      button.removeEventListener('mouseover', () => {});
      button.removeEventListener('mouseout', () => {});
    };
  }, []);

  return (
    <>
      <Head>
        <title>Button Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #100720;
          }

          button {
            width: 165px;
            height: 62px;
            cursor: pointer;
            color: #fff;
            font-size: 17px;
            border-radius: 1rem;
            border: none;
            position: relative;
            background: #100720;
            transition: 0.15s;
          }

          button::after {
            content: '';
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2%);
            filter: blur(15px);
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
          }

          button:active {
            transform: scale(0.9) rotate(3deg);
            background: radial-gradient(circle farthest-corner at 10% 20%, rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2%);
            transition: 0.5s;
          }
        `}</style>
      </Head>
      <button>Get Start</button>
    </>
  );
}
