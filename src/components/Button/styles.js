import styled, { keyframes, css } from 'styled-components'

export const rubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.15, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.15, 1);
  }
  50% {
    transform: scale3d(1.10, 0.85, 1);
  }
  65% {
    transform: scale3d(.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, .95, 1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`

export const ButtonDownload = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  margin: auto;
  border-radius: 100%;
  background: ${({ load, done }) =>
    done ? '#0077FF' : load ? 'rgba(0, 119, 255, 0.2)' : '#E8EAED'};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  ${({ done }) =>
    done &&
    css`
      animation: ${rubberBand} 0.8s;
    `}

  &:after {
    content: '';
    position: relative;
    display: block;
    width: 200%;
    height: 100%;
    background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0)
    );
    transform: ${({ done }) =>
      done ? 'translateX(50%)' : 'translateX(-100%)'};
    transition: transform ${({ done }) => (done ? '0.4s ease' : 'none')};
    transition-delay: ${({ done }) => (done ? '0.7s' : '0s')};
  }

  svg {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;

    &#border {
      position: absolute;
      top: 0;
      left: 0;
      stroke: ${({ load }) => (load ? '#0077FF' : 'none')};
      stroke-dasharray: 144;
      stroke-dashoffset: ${({ load }) => (load ? '0' : '144')};
      transition: all 0.9s linear;
    }

    &#arrow {
      position: absolute;
      top: 14px;
      left: 17px;
      stroke: ${({ load }) => (load ? '#0077FF' : '#9098A9')};
      transition: all 0.2s ease;
      display: ${({ done }) => (done ? 'none' : 'block')};
    }

    &#check {
      position: absolute;
      top: 17px;
      left: 13px;
      stroke: white;
      transform: ${({ done }) => (done ? 'scale(1)' : 'scale(0)')};
      transition: all 0.2s ease;
      transition-delay: ${({ done }) => (done ? '0.2s' : '0s')};
    }
  }
`
