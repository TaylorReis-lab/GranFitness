import styled from 'styled-components'

export const Container = styled.div`
  background-color: #00000098;
`

export const Section = styled.div`
  #container-terms {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding-left: 15%;
    padding-right: 15%;
    color: #ffff;
    z-index: -1;
  }

  h4 {
    font-size: 17px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  z-index: 1000;
  position: fixed;
`