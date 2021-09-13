import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Body, BoxLeft, BoxRight, Noice, Legend, Pic, R, Rect } from '../components/components.js';
import { ThemeProvider } from 'styled-components';


export default function Home() {

  const theme = {
    type : 'dark'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Y &#183; GDSC Roots</title>
        <meta name="description" content="bla bla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{width : '100vw', height : '100vh'}}>
        <ThemeProvider theme={theme}>
        <Body>
          <Noice>
            <BoxLeft>
                <Legend>
                  <Pic/>
                  <Rect><R>r</R></Rect>
                </Legend>

            </BoxLeft>
            <BoxRight>

            </BoxRight>
          </Noice>
        </Body>
        </ThemeProvider>
      </main>
    </div>
  )
}
