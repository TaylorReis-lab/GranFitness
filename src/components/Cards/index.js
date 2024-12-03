import React from 'react'

import { CardImg, CardDescription, CardPlans } from './styled'

export const Cards = ({ image, name, description }) => (
  <CardPlans className='containerplans'>
    <CardImg className='icon' src={image} alt={name} />
    <CardDescription className='descriptioncards' dangerouslySetInnerHTML={{ __html: description, name }} />
  </CardPlans>
)
