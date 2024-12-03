import React from 'react'

import { Header, Footer, Cards, Questions } from '../../components'
import { ContainerBackgraound, ContainerMain, BackgroundImage } from './styles'

export function Planos() {
  return (
    <>
      <BackgroundImage>
        <ContainerBackgraound>
          <Header />
          <ContainerMain>
            <h1>PLANOS GRAN FITNESS</h1>
            <Cards
              image="https://i.ibb.co/JcpfyTS/plan-month.png"
              name="Plano Mensal"
              description={`
          <h2 class="scrolling scrolling-animate">
            Plano Mensal
          </h2>
          <p class="scrolling scrolling-animate">Mensalidade: R$ 90,00</p>
          <p class="scrolling scrolling-animate">Taxa única de Matrícula: R$ 20,00</p>
          <p class="scrolling scrolling-animate">Primeira Cobrança: R$ 100,00</p>
        `}
            />
            <Cards
              image="https://i.ibb.co/k2Z4qwr/plan-four-month.png"
              name="Plano Fidelidade 4 meses"
              description={`
          <h2 class="scrolling scrolling-animate">
            Plano Fidelidade 4 Meses
          </h2>
          <p class="scrolling scrolling-animate">Mensalidade: R$ 100,00</p>
          <p class="scrolling scrolling-animate">
            Taxa única de Matrícula: R$ 10,00
          </p>
          <p class="scrolling scrolling-animate">
            Primeira Cobrança: R$ 110,00
          </p>
          <p class="scrolling scrolling-animate">
            Demais Mensalidades: R$ 100,00
          </p>
        `}
            />
            <Cards
              image="https://i.ibb.co/555GfNb/plan-twelve-months.png"
              name="Plano Anual"
              description={`
          <h2 class="scrolling scrolling-animate">
            Plano Fidelidade 12 Meses
          </h2>
          <p class="scrolling scrolling-animate">Mensalidade: R$ 90,00</p>
          <p class="scrolling scrolling-animate">
            Taxa única de Matrícula: R$ 10,00
          </p>
          <p class="scrolling scrolling-animate">
            Primeira Cobrança: R$ 100,00
          </p>
          <p class="scrolling scrolling-animate">
            Demais Mensalidades: R$ 90,00
          </p>
        `}
            />
          </ContainerMain>
          <Questions />
          <Footer />
        </ContainerBackgraound>
      </BackgroundImage>
    </>
  )
}
