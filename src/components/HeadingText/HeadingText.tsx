import React from 'react'
import { Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const StyledHeading = styled(Heading)`
  color: ${(props) => props.color};
`

const HeadingText: React.FC = () => {
  return <StyledHeading />
}

export default HeadingText
