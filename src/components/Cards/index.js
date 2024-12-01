import React from 'react'

import { CardImg, CardDescription, CardPlans } from './styled'

export const Cards = ({ image, name, description }) => (
  <CardPlans>
    <CardImg src={image} alt={name} />
    <CardDescription dangerouslySetInnerHTML={{ __html: description, name }} />
  </CardPlans>
)
