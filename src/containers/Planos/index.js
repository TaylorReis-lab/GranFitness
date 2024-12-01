import React from 'react'

import { Header, Footer } from '../../components'
import { ContainerBackgraound, ContainerCards, Cards } from './styles'

export function Planos() {
  return (
    <>
      <ContainerBackgraound>
        <Header />
        <ContainerCards id="plans">
          <h1 class="scrolling scrolling-animate">PLANOS GRAN FITNESS</h1>
          <Cards>
            <div className="plan-icon" class="scrolling scrolling-animate">
              <img
                src="../../../public_html/assets/plan-twelve-months.png"
                alt="12 Months"
              />
            </div>
            <div class="plan-details">
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
            </div>
          </Cards>
          <Cards>
            <div className="plan-icon" class="scrolling scrolling-animate">
              <img
                src="../../../public_html/assets/plan-four-month.png"
                alt="4 Months"
              />
            </div>
            <div class="plan-details">
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
            </div>
          </Cards>
          <Cards>
            <div className="plan-icon" class="scrolling scrolling-animate">
              <img
                src="../../../public_html/assets/plan-month.png"
                alt="Plan Months"
              />
            </div>
            <div class="plan-details">
              <h2 class="scrolling scrolling-animate">Plano Mensal</h2>
              <p class="scrolling scrolling-animate">Mensalidade: R$ 100,00</p>
              <p class="scrolling scrolling-animate">
                Taxa única de Matrícula: R$ 10,00
              </p>
              <p class="scrolling scrolling-animate">
                Primeira Cobrança: R$ 110,00
              </p>
            </div>
          </Cards>
        </ContainerCards>
        <Footer />
      </ContainerBackgraound>
    </>
  )
}
