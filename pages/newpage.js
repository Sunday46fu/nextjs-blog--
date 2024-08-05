// pages/newpage.js
import Head from 'next/head';
import Link from 'next/link'; // นำเข้า Link จาก next/link

export default function NewPage() {
  return (
    <>
      <Head>
        <title>New Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>This is the new page!</h1>
        <Link href="/" passHref>
          <button style={styles.button}>Go to Home Page</button>
        </Link>
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column', // เปลี่ยนเป็น column เพื่อให้ปุ่มอยู่ใต้ข้อความ
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
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff', // ตัวอักษรสีขาว
    backgroundColor: '#000', // พื้นหลังสีดำ
    border: '2px solid #fff', // ขอบสีขาวหนา 2px
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
