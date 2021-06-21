import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;
    padding: 10px;
    max-width: 48%;
    ${({ theme }) => theme.mediaQueries.sm} {
      max-width: 47%;
      h2 {
        font-size: 14px;
      }
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 47%;
      padding: 24px;
    }
  }
`

export default FlexLayout
