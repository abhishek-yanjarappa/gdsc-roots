import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Body, BoxLeft, BoxRight, Noice, Legend, Pic, R, Rect, Txt, Set, Link } from '../components/components.js';
import { ThemeProvider } from 'styled-components';
import NightsStay from '@material-ui/icons/NightsStay';
import { IconButton, SvgIcon } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Home() {

  const [mode, setMode] = useState(true);
  
  const darkTheme = {
    dark : true
  }

  const lightTheme = {
    dark : false
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Y &#183; GDSC Roots</title>
        <meta name="description" content="bla bla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{width : '100vw', height : '100vh'}}>
        <ThemeProvider theme={mode ? lightTheme : darkTheme}>
        <Body>
          <Noice>
            <BoxLeft>
                <Legend>
                  <Pic></Pic>
                  <Rect><R>r</R></Rect>
                </Legend>
                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', flexDirection:'column'}}>
                  <IconButton onClick={(e) => setMode(prevMode => !prevMode)}
                  style={{color : `${mode ? '#68604B' : '#87BBB5'}`,  transform:'translate(120px , 0px)'}}>
                  <NightsStay style={{width:'50px', height:'50px',}} />
                  </IconButton>
                  <div>
                    <Txt type={'Hi'}>Hi, I'm</Txt>
                  <Txt type={'abhi'}>Abhishek Y</Txt>
                  <Txt type={'art'}>I make art.</Txt>
                  </div>
                </div>
            </BoxLeft>
            <BoxRight>
              <Set>
                <Link><InstagramIcon style={{width:'60px', height : '60px'}}/></Link>
                <Link><TwitterIcon style={{width:'60px', height : '60px'}}/></Link>
              </Set>
              <Set>
                <Link><GitHubIcon style={{width:'60px', height : '60px'}}/></Link>
                <Link hover={'disabled'}>
                  <Image width='60' height='60' src={mode? '/vinimaya.svg' : '/vinimayadark.svg'}/>
                </Link>
              </Set>
              <Set>
                <Link><LinkedInIcon style={{width:'60px', height : '60px'}}/></Link>
                <Link><MailOutlineIcon style={{width:'60px', height : '60px'}}/></Link>
              </Set>
            </BoxRight>
          </Noice>
        </Body>
        </ThemeProvider>
      </main>
    </div>
  )
}
