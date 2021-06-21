import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import { GiftIcon, WalletIcon } from 'react-line-awesome'
import HighlightedText from 'components/HighlightedText'
import StyledButton from 'components/StyledButton'

const Lambo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 100px;
    margin-right: 10px;
  }
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  button:not(:last-of-type) {
    margin-right: 20px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Heading as="h1" size="xl" my="24px" mr="auto" color="white" className="hero-font">
        Goose Finance
      </Heading>
      <Lambo>
        <img alt="" src="images/lambo-red.png" />
        <Heading as="h6" color="white">
          Your Lambo Tickets
          <br />
          <HighlightedText>0</HighlightedText>
        </Heading>
      </Lambo>
      <StyledButton background="secondary">
        <GiftIcon className="header-icon" />
        Airdrop
      </StyledButton>
      <StyledButton background="primary">
        <WalletIcon className="header-icon" />
        Collect Wallet
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
