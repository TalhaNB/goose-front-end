import React from 'react'
import styled from 'styled-components'

interface HTextProps {
  children?: React.ReactNode
}

const Highlight = styled.span`
  color: #ffbc00;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label,
  a {
    color: #ffbc00;
  }
`

const HighlightedText: React.FC<HTextProps> = ({ children }) => {
  return <Highlight>{children}</Highlight>
}

export default HighlightedText
