import styled from 'styled-components'

export const CardPlans = styled.div`
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  margin-top: 15px;
  text-align: left;
  display: flex;
  background-color: transparent;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const CardImg = styled.img`
  width: 157px;
  height: 100%;
`

export const CardDescription = styled.div`
  position: relative;
  flex-grow: 1;
  background: #5c5c5ca6;
  border: 1px solid #ddd;
  h2 {
    font-size: 24px;
    margin: 10px 20px 7px;
  }
  p {
    margin: 5px 20px;
  }
`
