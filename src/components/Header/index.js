import React, { useEffect, useRef, useState } from 'react'
import { Container, HumburguerMenu, Nav, NavbarMenu, NavLogo } from './styled'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function Header() {
  const headerRef = useRef(null)
  const menuburguerRef = useRef(null)
  const navbarMenuRef = useRef(null)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    const menuburguer = menuburguerRef.current
    const navbarmenu = navbarMenuRef.current

    // Função para o menu hambúrguer

    const handleScroll = () => {
      setIsFixed(window.scrollY > 50)
    }

    const handleHamburgerClick = () => {
      menuburguer.classList.toggle('open')
      navbarmenu.classList.toggle('open')
      header.classList.toggle('burguer')
    }

    // Função para animações de elementos ao rolar a página
    const handleScrollAnimations = () => {
      const scrollingElements = document.querySelectorAll('.scrolling')

      scrollingElements.forEach(element => {
        element.classList.add('hidden')
      })

      const isInViewport = element => {
        const rect = element.getBoundingClientRect()
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        )
      }

      const onScroll = () => {
        scrollingElements.forEach(element => {
          if (isInViewport(element)) {
            element.classList.add('scroll-in-view')
            element.classList.remove('hidden')
          }
        })
      }

      window.addEventListener('scroll', onScroll)
      onScroll() // Para elementos já na viewport ao carregar a página
    }

    window.addEventListener('scroll', handleScroll)
    handleScrollAnimations()
    menuburguer.addEventListener('click', handleHamburgerClick)

    // Limpa eventos ao desmontar o componente
    return () => {
      menuburguer.removeEventListener('click', handleHamburgerClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container className="header" ref={headerRef} isFixed={isFixed}>
      <Nav>
        <NavLogo className="navbar-logo" isFixed={isFixed}>
          <Link to="/">
            <img
              id="logo"
              src="https://media.discordapp.net/attachments/1308748375138504754/1308752193876398191/soon.png?ex=67430a76&is=6741b8f6&hm=0936460ec6576a624ec9bee57873af29b4097fb4d109898995f8700848124546&=&format=webp&quality=lossless"
              alt="image-logo"
            />
          </Link>
        </NavLogo>
        <HumburguerMenu ref={menuburguerRef} className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </HumburguerMenu>
        <NavbarMenu
          ref={navbarMenuRef}
          className="navbar-collapse"
          id="navbar-menu"
        >
          <ul className="justify-content-end">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Unidade</Link>
            </li>
            <li>
              <Link to="/planos">Planos</Link>
            </li>
            <li>
              <Link to="/planos#duvidas">Dúvidas</Link>
            </li>
            <li>
              <Link to="/termos-de-condicoes">Termos e Condições</Link>
            </li>
            <li>
              <Link to="/politica-de-privacidade">
                Politicas de Privacidade
              </Link>
            </li>
          </ul>
        </NavbarMenu>
      </Nav>
    </Container>
  )
}
