import React from 'react'
import styled from 'styled-components'
import { Card, CardHeader, CardBody } from '@pancakeswap-libs/uikit'

interface CardProps {
  children?: React.ReactNode
  props?: any
  header?: string
  className?: string
  style?: any
}

const CustomCard = styled(Card)`
  border-radius: 5px;
  background-color: #12192e;
  color: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h2 {
    font-size: 32px;
  }

  ol {
    li {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.0125em;
    }
  }
`

const CustomCardHeader = styled(CardHeader)`
  background: linear-gradient(90deg, #4a13c7, #c100d6);
  text-shadow: rgb(0, 0, 0) 3px 3px 5px;
  font-weight: 900;
  font-size: 34px;
  padding: 15px;
`

const StyledCard: React.FC<CardProps> = ({ children, className, style, header, ...props }) => {
  return (
    <CustomCard {...props} className={className} style={style}>
      {header && <CustomCardHeader>{header}</CustomCardHeader>}
      <CardBody>{children}</CardBody>
    </CustomCard>
  )
}

export default StyledCard
