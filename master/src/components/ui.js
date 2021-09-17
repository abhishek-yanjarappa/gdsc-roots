import styled, {css} from 'styled-components';

export const Body = styled.div`
    background-color: ${props => props.theme.dark ? '#374745' : '#D9CAA9'};
    transition: 500ms;
    width : 100vw; height : 100%;
    @media only screen and (max-width: 850px) {
    height: max-content;
}  
`;

export const Noice = styled.div`
    background-image: url(noise.png);
    background-repeat: repeat; background-size: 120px; height: 100%;
    width: 100%; display: flex; justify-content: center; align-items: center;
    @media only screen and (max-width: 850px) {
    flex-direction : column; height: max-content;
}
`;

export const BoxLeft = styled.div`
    width: 50%; height:80%; max-height : 475px;min-height:450px; 
    border: 5px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    margin: 120px 0px 120px 120px; transition: 500ms;
    max-width: 440px; aspect-ratio: 0.845; background-color: rgba(0,0,0,0.1);
    display: flex; align-items: stretch; flex-direction: column;
    @media only screen and (max-width: 850px) {
    margin: 60px 30px 0px 30px; width: 100%;
    max-width: 325px; border: 4px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'};
}
`;

export const BoxRight = styled.div`
    width: 50%; height:80%; max-height : 475px;min-height:450px; 
    border-right: 5px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    margin: 120px 120px 120px 0px; display: flex; flex-direction: column; justify-content: space-between;
    align-items: stretch;
    max-width: 440px; transition: 500ms;
    border-top: 5px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    border-bottom: 5px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    @media only screen and (max-width: 850px) {
    margin: 0px 30px 90px 30px; 
    border-right :4px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    border-bottom: 4px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'};
    border-left: 4px solid ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    border-top: 0px;
    width :100%;
    max-width : 325px;
}
`;

export const Legend = styled.div`
    width: 108%; display: flex; justify-content: center; align-items :flex-end ; 
    transform: translate(-30px, -30px);
    @media only screen and (max-width: 850px) {
        width: 110.75%; 
}
`;

export const Pic = styled.div`
    background-image: url(pic.png);
    width: 50% ; height: 220px; background-repeat: no-repeat; background-size: cover;
    @media only screen and (max-width: 850px) {
        height: 180px;
}
`;

export const Rect = styled.div`
    width: 50%; height: 220px; transition: 500ms;
    background-color: ${props => props.theme.dark ? '#47706B' : '#68604B'}; 
    @media only screen and (max-width: 850px) {
        height: 155px;
}
`;

export const R = styled.a`
    width:100%;height:100%; display: flex;justify-content:flex-start;align-items:center; 
    text-decoration: none;
    padding-left: 30px; cursor: pointer;-webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: Spectral; font-size: 64px; font-weight:400; transition: 500ms;
    color: ${props => props.theme.dark ? '#D8FFFA' : '#FFF5DA'}; 
`;

export const Txt = styled.div`
    font-family: Spectral; 
    font-size: ${props => props.type==='abhi' ? '32px' : '13px'};
    color : ${props => props.theme.dark ? '#D8FFFA' : '#262216'}; 
    font-weight : ${props => props.type==='abhi' ? '600' : '700'};
    line-height: 25px; transition: 500ms;
    transform: ${props => props.type==='art' ? 'translate(90px, 0px)' : 'translate(0px,0px)'};
`;

export const Set = styled.div`
    display: flex; justify-content: space-between; align-items: center;
    min-height: 150px; height: 34%; 
    margin-top: -3px; margin-bottom: -3px;
    @media only screen and (max-width: 850px) {
    height: 151px;
}
`;

export const Link = styled.a`
    display: flex; justify-content: center; align-items: center; height: 100%; width: 50%;
    color : ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
    text-decoration: none; cursor: pointer; transition: 500ms;
    transition: 400ms; -webkit-tap-highlight-color: rgba(0,0,0,0);
    ${props => props.hover !== 'disabled' ? css`
    :hover {background-color : ${props => props.theme.dark ? '#D8FFFA' : '#332D1D'}; 
        color : ${props => props.theme.dark ? '#0E2623' : '#D9CAA9'}}
    ` : 
    css`:hover {background: linear-gradient(225.03deg, #FFA24A -1.7%, #B76720 100%); transition:400ms}`
    }
`;