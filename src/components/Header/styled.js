import styled, { css } from 'styled-components'

// Responsividade Header

const breakpoints = {
  mobile: '480px',
  tablet: '768px'
}

const responsiveStyles = css`
  @media (max-width: ${breakpoints.tablet}) {
    Nav,
    .navbar-collapse ul {
      flex-direction: column;
      align-items: center;
    }

    .navbar-collapse ul li {
      margin: 10px 0;
    }

    .navbar-collapse {
      display: none;
      flex-direction: column;
      width: 100%;
      background-color: #000000;
      position: absolute;
      top: 90px;
      left: 0;
    }

    .navbar-collapse.open {
      display: flex;
      animation: fadeIn 0.5s ease-in-out;
      z-index: 1;
    }

    .header.open {
      background-color: #000000;
    }

    #hamburger-menu {
      display: flex;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    /* Ajustes adicionais para telas bem pequenas */
    img {
      height: 4rem;
      margin-left: 8px;
    }
    .header {
      padding: 10px 20px;
    }
  }
`

export const Container = styled.div`
  top: 0;
  height: 110px;
  width: 100%;
  margin: auto;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;

  .container-fixed {
    position: sticky;
    background-color: #000000;
  }

  .burguer {
    background-color: #000000;
  }

  ${responsiveStyles}
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  ${responsiveStyles}
`

export const NavLogo = styled.div`
  img {
    height: 5rem;
    text-align: start;
    transition: all 0.4s ease;
  }

  ${responsiveStyles}
`

export const NavbarMenu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 18px;
  }
  a {
    font-size: 19px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 0 20px;
  }
  a:hover {
    color: #f0a500;
  }

  ${responsiveStyles}
`

export const HumburguerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1000;
  margin-right: 8px;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin: 4px;
    transition: all 0.3s ease;
  }

  .hamburger-menu.open span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger-menu.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-menu.open span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${responsiveStyles}
`