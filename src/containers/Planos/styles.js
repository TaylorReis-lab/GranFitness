import styled, {css} from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  computer: '1200px'
}

const responsiveStyles = css`
  @media (max-width: ${breakpoints.tablet}) {
    .containerplans {
      width: 100%;
      flex-direction: column;
      height: auto;
    }
  }
`

export const ContainerBackgraound = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  overflow: hidden;
  z-index: -3;
  background-color: rgba(0, 0, 0, 0.75);
`

export const BackgroundImage = styled.div`
  background-size: cover;
  background-repeat: repeat;
  background-image: url(https://media.discordapp.net/attachments/1308748375138504754/1308752148653150208/backgraund-img.png?ex=674d966b&is=674c44eb&hm=1e4c6a520bc7a313b2539a661492d1916f8ee8c3d9355c251f1964f341bb960a&=&format=webp&quality=lossless);
`

export const ContainerMain = styled.div`
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  display: grid;
  justify-items: center;
  color: #ffff;

  ${responsiveStyles}
`