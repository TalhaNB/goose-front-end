import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import HighlightedText from 'components/HighlightedText'
import StyledCard from 'components/StyledCard'
import StyledButton from 'components/StyledButton'
import Page from 'components/layout/Page'
import Section from 'components/layout/Section'

const ReferralsSection = styled(Section)`
  background-image: url('/images/home_1_2.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 70px 90px;
`

const GrayBg = styled.div`
  background: #bdbdbd;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 20px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1b1464;
    font-weight: 500;
  }
`

const FaqSection = styled.div`
  ol {
    padding-left: 50px;
    li {
      font-size: 16px;
      font-weight: 400;
    }
  }
`

const Referrals = () => {
  return (
    <Container>
      <ReferralsSection>
        <Heading as="h1" size="xl" color="white">
          <HighlightedText>Goose Finance Referral Program</HighlightedText>
        </Heading>
        <GrayBg>
          <Heading as="h6" size="lg">
            Share the referral link below to invite your friends and earn 3% of your friends&apos; earnings FOREVER!
          </Heading>
        </GrayBg>
      </ReferralsSection>
      <StyledCard>
        <Flex flexDirection="column" alignItems="center">
          <StyledButton background="primary" style={{ marginBottom: '20px' }}>
            Unlock Wallet
          </StyledButton>
          <br />
          <p>Unlock wallet to get your unique referral link</p>
        </Flex>
      </StyledCard>
      <FaqSection>
        <StyledCard style={{ marginTop: '20px' }}>
          <Heading as="h6" mb="10px" color="white" style={{ lineHeight: '32px' }}>
            An on-chain referral program has been implemented to incentivize users to invite friends to join the
            farming. Inviters can earn <HighlightedText>3%</HighlightedText> of his/her friends&apos; earnings forever.
            Our referral program lets users earn Goose Finance&apos;s without depositing any tokens
          </Heading>
          <ol>
            <li>Visit CerberusSwap referral program page</li>
            <li>Unlock your wallet to get your unique referral link</li>
            <li>Share your referral link with your friends</li>
            <li>
              When your friends connect wallet, a cookie will be recorded in his browser that he is referred by you
            </li>
            <li>
              When your friends *USE THE SAME BROWSER* to deposit the first time, your wallet will be recorded in the
              system.
            </li>
            <li>
              Every time your friends harvest rewards from farms, you will receive referral commissions send to your
              wallet automatically
            </li>
            <li>The current referral commission rate is 3%</li>
          </ol>
          <Heading as="h6" mt="20px" mb="10px" color="white" style={{ lineHeight: '32px' }}>
            When will I receive my Referral Reward?
          </Heading>
          <p>
            You will automatically receive a Goose Finance&apos;s reward in your wallet whenever the referred user
            Harvests / Withdraws from our Farms and/or Pools.
          </p>
          <Heading as="h6" mt="20px" mb="10px" color="white" style={{ lineHeight: '32px' }}>
            Will I lose % of my income to the referrer because of using his referral link?
          </Heading>
          <p>
            No! The contract will automatically mint this % anew and send it to referrer wallet. So you and him earn
            together, you don&apos;t lose anything from your harvested rewards.
          </p>
        </StyledCard>
      </FaqSection>
    </Container>
  )
}

export default Referrals
