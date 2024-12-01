import React, { useState } from 'react'

import { CollapseContainer, SectionQuestions, Content } from './styled'

export const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CollapseContainer>
      <SectionQuestions isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h6>{title}</h6>
        <i className="material-icons">arrow_downward</i>
      </SectionQuestions>
      <Content isOpen={isOpen}>{children}</Content>
    </CollapseContainer>
  )
}
