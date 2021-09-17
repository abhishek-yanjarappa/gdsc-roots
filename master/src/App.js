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
                  <img style={{width : '50px', height:'50px'}} src={mode? '/vinimaya.svg' : '/vinimayadark.svg'}/>
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

