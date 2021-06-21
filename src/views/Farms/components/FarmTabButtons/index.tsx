import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  color: white;

  ${Text} {
    margin-left: 8px;
  }

  > div:first-child {
    background: #88888842;
    height: 21px;
    width: 50px;
  }
`

const StyledToggle = styled(Toggle)`
  + div {
    width: 30px;
    height: 30px;
    top: -5px;
    left: -5px;
  }

  &:checked + div {
    left: calc(100% - 30px) !important;
  }
`

const ButtonMenuWrapper = styled.div`
  > div:first-child {
    background: transparent;
  }

  a {
    background: #424242;
    color: white;

    &:first-of-type {
      border-radius: 50px 0 0 50px;

      &:hover:not(:disabled):not(.button--disabled):not(:active),
      &:active {
        background-color: #ce9a06;
      }
    }

    &:last-of-type {
      border-radius: 0 50px 50px 0;
      margin-left: 0;

      &:hover:not(:disabled):not(.button--disabled):not(:active),
      &:active {
        background: #333;
      }
    }
  }

  a[variant='subtle'] {
    background: #ffbc00;
    color: white;
  }
`

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ToggleWrapper>
        <StyledToggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text color="white"> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>
      <ButtonMenuWrapper>
        <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="subtle">
          <ButtonMenuItem as={Link} to={`${url}`}>
            {TranslateString(698, 'Active')}
          </ButtonMenuItem>
          <ButtonMenuItem as={Link} to={`${url}/history`}>
            {TranslateString(700, 'Inactive')}
          </ButtonMenuItem>
        </ButtonMenu>
      </ButtonMenuWrapper>
    </Wrapper>
  )
}

export default FarmTabButtons
