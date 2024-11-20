import React from 'react'
import ReactPLayer from 'react-player'

import { Header } from '../../components'
import { ContainerBackgraound, ContainerVideo } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <ContainerBackgraound>
        <ContainerVideo>
          <div className="mbr-video-foreground">
            <ReactPLayer
              className="mbr-video-foreground"
              width="100%"
              height="100%"
              allow="muted; autoplay; picture-in-picture;"
              allowfullscreen
              playing={true}
              url="https://www.youtube.com/embed/V9PVRfjEBTI?si=XJkAprwBYq7dNjUg&amp;"
            />
          </div>
          <div class="conteiner-text">
            <div class="text">
              <strong>
                Sejam bem-vindos ao centro de treinamento Gran Fitness
              </strong>
              <p>
                Do iniciante ao avançado! | Do jovem a melhor idade! <br />
                Homens e Mulheres que desejam saúde, qualidade de vida e
                estética!
              </p>
            </div>
          </div>
        </ContainerVideo>
      </ContainerBackgraound>
    </>
  )
}
