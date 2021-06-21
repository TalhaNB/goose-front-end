import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 50px;
  background-color: #12192e;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 30px;
  }

  .hero-text-left {
    h6 {
      line-height: 2rem;
    }
  }
`

export default Section
