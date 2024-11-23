import React from 'react'
import ReactPLayer from 'react-player'

import { Header, Footer } from '../../components'
import { ContainerBackgraound, ContainerVideo } from './styles'

export function Home() {
  return (
    <>
      <ContainerBackgraound>
        <Header />
        <ContainerVideo>
          <div className="mbr-video-foreground">
            <ReactPLayer
              className="mbr-video-foreground"
              width="1920px"
              height="960px"
              playing={true}
              muted={true}
              loop={true}
              url="https://www.youtube.com/embed/v87-LOxRKPc?start=2"
            />
          </div>
          <div className="conteiner-text">
            <div className="text">
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
      <Footer />
    </>
  )
}
