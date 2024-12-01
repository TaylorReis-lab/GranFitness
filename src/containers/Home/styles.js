import styled, { css } from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  computer: '1200px'
}

const responsiveStyles = css`
  @media (max-width: ${breakpoints.computer}) {
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .text strong {
      font-size: 2.5rem;
    }
    .text p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 992px) {
    main {
      margin-top: 11.5rem;
    }
    .text strong {
      font-size: 2rem;
    }
    .text p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .conteiner-text {
      display: flex;
      text-align: center;
      justify-content: center;
      padding-top: 6rem;
    }
    .text h1 {
      font-size: 1.75rem;
    }
    .text p {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    .conteiner-text {
      height: 60vh;
    }
    .text h1 {
      font-size: 1.5rem;
    }
    .text p {
      font-size: 0.875rem;
    }
  }
`

export const ContainerBackgraound = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
`

export const ContainerVideo = styled.div`
  .mbr-video-foreground {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    object-fit: cover;
    z-index: -1;
  }

  .mbr-background-video {
    margin-top: 0;
    max-width: initial;
    transition-property: opacity;
    transition-duration: 1000ms;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.2);
    object-fit: cover;
  }

  /* Centralização e Estilização do Texto */
  .conteiner-text {
    padding-top: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }

  .text strong {
    font-size: 3rem;
    font-weight: 400;
  }

  .text p {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  ${responsiveStyles}
`

export const BackgroundImage = styled.div`
  z-index: -2;
  background-size: cover;
  background-repeat: repeat;
  background-image: url(https://media.discordapp.net/attachments/1308748375138504754/1308752148653150208/backgraund-img.png?ex=674d966b&is=674c44eb&hm=1e4c6a520bc7a313b2539a661492d1916f8ee8c3d9355c251f1964f341bb960a&=&format=webp&quality=lossless);
`
