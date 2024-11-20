import styled from 'styled-components'

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
`
