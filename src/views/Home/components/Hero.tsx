import React from 'react'
import { Heading, Text, BaseLayout, Card, CardHeader, CardBody, Flex } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { TelegramIcon, TwitterIcon } from 'react-line-awesome'
import useI18n from 'hooks/useI18n'
import Section from 'components/layout/Section'
import StyledButton from 'components/StyledButton'
import StyledCard from 'components/StyledCard'
import HighlightedText from 'components/HighlightedText'
import PillButton from 'components/PillButton'

const HeroSection = styled(Section)`
  background-image: url('/images/header_home2.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <HeroSection>
      <Heading as="h1" size="xxl" color="white" className="hero-font">
        {TranslateString(576, 'Goose Finance')}
      </Heading>
      <HighlightedText>
        <Heading as="h3" size="lg" mt="10px" mb="25px">
          {TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}
        </Heading>
      </HighlightedText>
      <BaseLayout>
        <div className="span-6">
          <Heading as="h1" size="xl" mb="24px" color="white">
            World First Liquidity Mining Coin with Static Rewards
          </Heading>
          <Text className="hero-text-left">
            <HighlightedText>
              <Heading as="h6">Safemoon earned big, Goose Finance will earn bigger!</Heading>
            </HighlightedText>
            <Heading as="h6" color="white" mb="24px">
              Better than Safemoon and other meme coins, Goose Finance have many innovative features that help users
              earn &amp; win bigger.
            </Heading>
            <StyledButton type="outline" background="none" color="white">
              View Docs
            </StyledButton>
          </Text>
        </div>
        <div className="span-6 text-center">
          <HighlightedText>
            <Heading as="h1" mb="24px" className="text-shadow" style={{ fontSize: '62px' }}>
              Presale is Open
            </Heading>
          </HighlightedText>
          <StyledButton background="primary" proportion="xl" style={{ fontSize: '24px' }}>
            To Presale
          </StyledButton>
          <Flex justifyContent="center" mt="10px">
            <PillButton background="secondary" proportion="md" color="white">
              <TelegramIcon />
              Telegram
            </PillButton>
            <PillButton background="secondary" proportion="md" color="white">
              <TwitterIcon />
              Twitter
            </PillButton>
          </Flex>
        </div>
      </BaseLayout>
    </HeroSection>
  )
}

export default Hero
