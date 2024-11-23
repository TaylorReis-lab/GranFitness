import React, { useEffect, useRef } from 'react'
import { Container, HumburguerMenu, Nav, NavbarMenu, NavLogo } from './styled'

export function Header() {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const menuburguerRef = useRef(null)
  const navbarMenuRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const logo = logoRef.current
    const menuburguer = menuburguerRef.current
    const navbarmenu = navbarMenuRef.current

    // Função para manipulação do header ao rolar a página
    const handleHeaderScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 50) {
        header.classList.add('header-fixed')
        logo.style.height = '5rem'
      } else if (scrollPosition <= 80) {
        header.classList.remove('header-fixed')
        logo.style.height = '8rem'
      }
    }
    // Função para o menu hambúrguer
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

    // Adiciona eventos
    window.addEventListener('scroll', handleHeaderScroll)
    handleScrollAnimations()
    menuburguer.addEventListener('click', handleHamburgerClick)

    // Limpa eventos ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleHeaderScroll)
      menuburguer.removeEventListener('click', handleHamburgerClick)
    }
  }, [])

  return (
    <Container className="header" ref={headerRef}>
      <Nav>
        <NavLogo ref={logoRef} className="navbar-logo">
          <img
            id="logo"
            src="https://media.discordapp.net/attachments/1308748375138504754/1308752193876398191/soon.png?ex=67430a76&is=6741b8f6&hm=0936460ec6576a624ec9bee57873af29b4097fb4d109898995f8700848124546&=&format=webp&quality=lossless"
            alt="image-logo"
          />
        </NavLogo>
        <HumburguerMenu ref={menuburguerRef} id="hamburger-menu">
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
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="/index.html#unit">Unidade</a>
            </li>
            <li>
              <a href="/planos.html">Planos</a>
            </li>
            <li>
              <a href="/planos.html#content-faq">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="/termos-condicoes.html">Termos e Condições</a>
            </li>
          </ul>
        </NavbarMenu>
      </Nav>
    </Container>
  )
}
