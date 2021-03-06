import { useState } from 'react';
import { Body, BoxLeft, BoxRight, Noice, Legend, Pic, R, Rect, Txt, Set, Link } from './components/ui.js';
import { ThemeProvider } from 'styled-components';
import NightsStay from '@material-ui/icons/NightsStay';
import { IconButton} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typing from 'react-typing-animation';

export default function App() {

  const [mode, setMode] = useState(true);
  
  const darkTheme = {
    dark : true
  }

  const lightTheme = {
    dark : false
  }

  return (
      <div style={{width : '100vw', height : '100vh'}}>
        <ThemeProvider theme={mode ? lightTheme : darkTheme}>
        <Body>
          <Noice>
            <BoxLeft>
                <Legend>
                  <Pic></Pic>
                  <Rect><R href='https://bit.ly/3AjXv1C' rel='noopener noreferrer' target='_blank'>r</R></Rect>
                </Legend>
                <div style={{display:'flex', justifyContent:'space-around',alignItems:'center', flexDirection:'column'}}>
                  <IconButton onClick={(e) => setMode(prevMode => !prevMode)}
                  style={{color : `${mode ? '#68604B' : '#87BBB5'}`,  transform:'translate(120px , 0px)'}}>
                  <NightsStay style={{width:'50px', height:'50px',}} />
                  </IconButton>
                  <div>
                    <Txt type={'Hi'}><Typing speed={200}>Hi, I'm</Typing></Txt>
                  <Txt type={'abhi'}><Typing speed={200} startDelay={1800}>Abhishek Y</Typing></Txt>
                  <Txt type={'art'}><Typing speed={200} startDelay={3900}>I make art.</Typing></Txt>
                  </div>
                </div>
            </BoxLeft>
            <BoxRight>
              <Set>
                <Link href='https://www.instagram.com/abhishek_y.exe/' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon style={{width:'50px', height : '50px'}}/>
                </Link>
                <Link href='https://twitter.com/Abhishek_y__' target='_blank' rel='noopener noreferrer'>
                  <TwitterIcon style={{width:'50px', height : '50px'}}/>
                </Link>
              </Set>
              <Set>
                <Link href='https://github.com/abhishek-yanjarappa' target='_blank' rel='noopener noreferrer'>
                  <GitHubIcon style={{width:'50px', height : '50px'}}/>
                </Link>
                <Link hover={'disabled'} href='https://vinimaya.vercel.app/user/105889498257809539120?page=1' target='_blank' rel='noopener noreferrer'>
                  {mode ? 
                  <svg width="50" height="50" viewBox="0 0 387 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M384.477 0.0126618C385.565 0.0126618 386.109 1.64472 386.109 4.90882C386.109 8.17295 385.565 9.80501 384.477 9.80501C368.701 9.80501 354.556 15.7892 342.044 27.7576C330.075 39.7261 318.651 58.2228 307.771 83.2477L207.399 315C206.855 317.72 203.863 319.08 198.423 319.08C194.07 319.08 191.078 317.72 189.446 315L64.5938 67.7431C53.1694 43.8062 43.105 28.3017 34.4007 21.2294C25.6964 13.6131 15.088 9.80501 2.57559 9.80501C0.94353 9.80501 0.1275 8.17295 0.1275 4.90882C0.1275 1.64472 0.94353 0.0126618 2.57559 0.0126618C12.3679 0.0126618 20.5282 0.284668 27.0565 0.828681L81.7304 1.64472L144.565 0.828681C153.813 0.284668 166.597 0.0126618 182.918 0.0126618C184.55 0.0126618 185.366 1.64472 185.366 4.90882C185.366 8.17295 184.55 9.80501 182.918 9.80501C151.365 9.80501 135.588 16.0612 135.588 28.5737C135.588 31.8378 136.948 36.19 139.669 41.6302L231.064 212.996L284.922 82.4316C289.274 71.0072 291.45 61.2149 291.45 53.0546C291.45 39.4541 286.826 28.8457 277.577 21.2294C268.329 13.6131 255.545 9.80501 239.224 9.80501C238.136 9.80501 237.592 8.17295 237.592 4.90882C237.592 1.64472 238.136 0.0126618 239.224 0.0126618C253.913 0.0126618 265.065 0.284668 272.681 0.828681L321.643 1.64472L354.284 0.828681C360.812 0.284668 370.877 0.0126618 384.477 0.0126618ZM280.58 320.236C271.695 320.236 264.554 317.697 259.159 312.62C254.082 307.225 251.543 300.085 251.543 291.199C251.543 282.948 254.082 276.284 259.159 271.206C264.554 266.129 271.695 263.59 280.58 263.59C289.466 263.59 296.289 266.129 301.049 271.206C306.126 275.967 308.665 282.631 308.665 291.199C308.665 300.402 306.126 307.542 301.049 312.62C296.289 317.697 289.466 320.236 280.58 320.236Z" fill="#332D1D"/>
                  </svg>
                : 
                <svg width="50" height="50" viewBox="0 0 387 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M384.477 0.0126618C385.565 0.0126618 386.109 1.64472 386.109 4.90882C386.109 8.17295 385.565 9.80501 384.477 9.80501C368.701 9.80501 354.556 15.7892 342.044 27.7576C330.075 39.7261 318.651 58.2228 307.771 83.2477L207.399 315C206.855 317.72 203.863 319.08 198.423 319.08C194.07 319.08 191.078 317.72 189.446 315L64.5938 67.7431C53.1694 43.8062 43.105 28.3017 34.4007 21.2294C25.6964 13.6131 15.088 9.80501 2.57559 9.80501C0.94353 9.80501 0.1275 8.17295 0.1275 4.90882C0.1275 1.64472 0.94353 0.0126618 2.57559 0.0126618C12.3679 0.0126618 20.5282 0.284668 27.0565 0.828681L81.7304 1.64472L144.565 0.828681C153.813 0.284668 166.597 0.0126618 182.918 0.0126618C184.55 0.0126618 185.366 1.64472 185.366 4.90882C185.366 8.17295 184.55 9.80501 182.918 9.80501C151.365 9.80501 135.588 16.0612 135.588 28.5737C135.588 31.8378 136.948 36.19 139.669 41.6302L231.064 212.996L284.922 82.4316C289.274 71.0072 291.45 61.2149 291.45 53.0546C291.45 39.4541 286.826 28.8457 277.577 21.2294C268.329 13.6131 255.545 9.80501 239.224 9.80501C238.136 9.80501 237.592 8.17295 237.592 4.90882C237.592 1.64472 238.136 0.0126618 239.224 0.0126618C253.913 0.0126618 265.065 0.284668 272.681 0.828681L321.643 1.64472L354.284 0.828681C360.812 0.284668 370.877 0.0126618 384.477 0.0126618ZM280.58 320.236C271.695 320.236 264.554 317.697 259.159 312.62C254.082 307.225 251.543 300.085 251.543 291.199C251.543 282.948 254.082 276.284 259.159 271.206C264.554 266.129 271.695 263.59 280.58 263.59C289.466 263.59 296.289 266.129 301.049 271.206C306.126 275.967 308.665 282.631 308.665 291.199C308.665 300.402 306.126 307.542 301.049 312.62C296.289 317.697 289.466 320.236 280.58 320.236Z" fill="#D8FFFA"/>
                </svg>
                }
                </Link>
              </Set>
              <Set>
                <Link href='https://www.linkedin.com/in/abhishek-y-71743b202/' target='_blank' rel='noopener noreferrer'>
                  <LinkedInIcon style={{width:'50px', height : '50px'}}/>
                </Link>
                <Link href='mailto:abhishekyanjarappa@gmail.com'>
                  <MailOutlineIcon style={{width:'50px', height : '50px'}}/>
                </Link>
              </Set>
            </BoxRight>
          </Noice>
        </Body>
        </ThemeProvider>
      </div>
  )
}

