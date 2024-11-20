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
        header.classList.add('container-fixed')
        logo.style.height = '5rem'
      } else if (scrollPosition <= 80) {
        header.classList.remove('container-fixed')
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
    <Container>
      <Nav ref={headerRef} className="header">
        <NavLogo ref={logoRef} className="navbar-logo">
          <img
            id="logo"
            src="https://cdn.discordapp.com/attachments/1308748375138504754/1308752193876398191/soon.png?ex=673f15f6&is=673dc476&hm=7e3d573d09f5ee27a9ac5041a3af7ac5a2a52539e4f8deeb0592e06e8b86c542&"
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
