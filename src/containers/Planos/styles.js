import styled from 'styled-components'

// const breakpoints = {
//   mobile: '480px',
//   tablet: '768px',
//   computer: '1200px'
// }

// const responsiveStyles = css`
 
// `

export const ContainerBackgraound = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
`
export const ContainerCards = styled.div`
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  display: grid;
  justify-items: center;
  color: #ffff;
`

export const Cards = styled.div`
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  margin-top: 15px;
  text-align: left;
  display: flex;
  background-color: transparent;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 157px;
    height: 157px;
  }
`