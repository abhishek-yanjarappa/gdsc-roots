import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Y &#183; GDSC Roots</title>
        <meta name="description" content="bla bla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.background}>
            TEST
        </div>
        
      </main>
    </div>
  )
}
