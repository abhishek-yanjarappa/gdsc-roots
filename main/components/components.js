import styled, {css} from 'styled-components';

export const Body = styled.div`
    background-color: #D9CAA9;
    width : 100%; height : 100%;
`;

export const Noice = styled.div`
    background-image: url(noise.png);
    background-repeat: repeat; background-size: 120px;
    width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;
    @media only screen and (max-width: 750px) {
    flex-direction : column;
}
`;

export const BoxLeft = styled.div`
    width: 50%; height:80%; max-height : 475px; border: 5px solid #332D1D; margin: 120px 0px 120px 120px; 
    max-width: 440px; aspect-ratio: 0.845; background-color: rgba(0,0,0,0.1);
    @media only screen and (max-width: 750px) {
    margin: 60px 30px 0px 30px; width: 100%;
    max-width: 325px; border: 4px solid #332D1D;
}
`;

export const BoxRight = styled.div`
    width: 50%; height:80%; max-height : 475px; border-right: 5px solid #332D1D; 
    margin: 120px 120px 120px 0px;
    max-width: 440px;
    border-top: 5px solid #332D1D; border-bottom: 5px solid #332D1D; 
    @media only screen and (max-width: 750px) {
    margin: 0px 30px 90px 30px; border-right :4px solid #332D1D; border-bottom: 4px solid #332D1D;
    border-left: 4px solid #332D1D; border-top: 0px;
    width :100%;
    max-width : 325px;
}
`;

export const Legend = styled.div`
    width: 108.125%; display: flex; justify-content: center; align-items: center; 
    transform: translate(-30px, -30px);
`;

export const Pic = styled.div`
    background-image: url(pic.png);
    width: 50%; height: 220px; background-repeat: no-repeat; background-size: cover;
    
`;

export const Rect = styled.div`
    width: 50%; height: 220px; background-color: #68604B; 
`;

export const R = styled.div`
    width:100%;height:100%; display: flex;justify-content:flex-start;align-items:center; 
    padding-left: 30px;
    font-family: spectral; color: #FFF5DA; font-size: 60px; font-weight:500;
`;