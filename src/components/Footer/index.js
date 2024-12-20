import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function Footer() {
  return (
    <Container className="footer">
      <div className="container">
        <div className="row">
          <div class="col-12 col-md-6 col-lg-4">
            <h5 className="footer-title scrolling scrolling-animate">
              TERMOS DE CONDIÇÕES
            </h5>
            <ul className="footer-list scrolling scrolling-animate">
              <li>
                <span>
                  <Link to="/termos-de-condicoes">Termos e Condições</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/politica-de-privacidade">
                    Política de Privacidade
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <h5 class="footer-title scrolling scrolling-animate">
              LINKS RÁPIDOS
            </h5>
            <ul class="footer-list scrolling scrolling-animate">
              <li>
                <span>
                  <Link to="/planos">Nossos Planos</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/planos#duvidas">Duvidas Frequentes</Link>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <h5 className="footer-title scrolling scrolling-animate">
              REDES SOCIAIS
            </h5>
            <ul class="footer-social scrolling scrolling-animate">
              <li>
                <a href="https://wa.me/5564992540287?text=Ol%C3%A1,%20gostaria%20de%20fazer%20algumas%20perguntas">
                  <img
                    src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-tile.svg"
                    alt="Whatsapp"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_granfit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom scrolling-animate instagram-dev">
          <p>
            © Copyright Todos os direitos reservados -{' '}
            {new Date().getFullYear()} | Site by
            <a
              href="https://www.instagram.com/taylor__reis/"
              target="_blank"
              rel="noreferrer"
            >
              @Taylor__Reis
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}
