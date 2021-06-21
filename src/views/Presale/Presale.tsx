import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BaseLayout, Heading, Text } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import Section from 'components/layout/Section'
import HighlightedText from 'components/HighlightedText'
import StyledButton from 'components/StyledButton'
import PillButton from 'components/PillButton'
import StyledCard from 'components/StyledCard'
import AnnouncementSection from 'components/AnnouncementSection'

const PresaleSection = styled(Section)`
  background-image: url('/images/home-bg-3.png');
  background-repeat: no-repeat;
  background-color: #000;
  background-size: contain;

  img {
    width: 80px;
    margin: 0 auto 20px;
  }
`

const CountdownSection = styled(Section)`
  padding-top: 50px;
  background-image: url('/images/thunder-bg4.png');
  background-repeat: no-repeat;
  background-color: #000;
  background-size: contain;
`

const RulesSection = styled.div``

const Presale: React.FC = () => {
  return (
    <Page>
      <PresaleSection>
        <Heading as="h1" size="xxl" color="white" className="hero-font" mt="30px" mb="30px">
          Presale
        </Heading>
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
            </Text>
          </div>
        </BaseLayout>
        <BaseLayout>
          <div className="span-4 d-flex flex-column">
            <img alt="" src="/images/icon1.png" />
            <HighlightedText>
              <Heading mb="10px">Liquidity Mining</Heading>
            </HighlightedText>
            <Text color="white">
              GOOSEFINANCE is a limited supply coin with many utilities. The coin is hard capped at 5 Billions, with 2.5
              Billion being burned at the start. Unlike Safemoon and other meme tokens, not every coin can be bought on
              launch day. GOOSEFINANCE&apos;S initial supply will be only 500 million coins, so investors will need to
              mine to collect the remaining 2 Billion GOOSEFINANCE coins. User can mine GOOSEFINANCE by staking BNB,
              BUSD, ETH, or liquidity pairs such as BNB-BUSD, BNB-ETH. The mining process will be completed in roughly
              65-90 days. After all 5 Billions GOOSEFINANCE is mined, there will be no more coins minted and the only
              way to obtain GOOSEFINANCE will be through purchasing them.
            </Text>
          </div>
          <div className="span-4 d-flex flex-column">
            <img alt="" src="/images/icon2.png" />
            <HighlightedText>
              <Heading mb="10px">Automatic Rewards to Holders</Heading>
            </HighlightedText>
            <Text color="white">
              When GOOSEFINANCE is transferring, a 10% fee is taxed with each transaction. Of this 10%, 8% is
              redistributed to existing GOOSEFINANCE holders. Those who decide to hold their GOOSEFINANCE are rewarded
              from those who sell, so this mechanism encourage holders and discourage pump and dump traders. Holder are
              incentivized to hold their coin because their holding will increase over time. And even if GOOSEFINANCE
              investors take no action, they still collect additional GOOSEFINANCE just by holding it.
            </Text>
          </div>
          <div className="span-4 d-flex flex-column">
            <img alt="" src="/images/icon3.png" />
            <HighlightedText>
              <Heading mb="10px">Automatic Burning</Heading>
            </HighlightedText>
            <Text color="white">
              In each GOOSEFINANCE transaction, a 8% fee is redistributed to existing holders, including the Burning
              address. The Burning address is the biggest holder of GOOSEFINANCE (80% at start). So a 6.4% of each
              transaction will be sent to the Burning address to be burned. As this address continue to participate, it
              accumulates more GOOSEFINANCE, thereby effectively removing them from circulation. There is no limit to
              the burn, so the Burning address will keep growing, increasing the scarcity of GOOSEFINANCE over time.
            </Text>
          </div>
        </BaseLayout>
      </PresaleSection>
      <CountdownSection>
        <BaseLayout>
          <div className="span-4">
            <img alt="" src="/images/logo.png" />
          </div>
          <div className="span-8 text-center">
            <Heading size="xl" color="white" mt="20px">
              PRESALE End Countdown
            </Heading>
            <Heading size="xl" color="white">
              0 hours 0 minutes 0 seconds
            </Heading>
            <Heading color="white" mt="30px" className="font-weight-normal">
              Available: <HighlightedText>44,462,147.97</HighlightedText> GOOSEFINANCE (Presale Token)
            </Heading>
            <Heading color="white" mt="30px" className="font-weight-normal">
              Pancake listing price <HighlightedText>1 BNB = 23,300 GOOSEFINANCE</HighlightedText>
              <br />
              ($0.015 / GOOSEFINANCE - only after Presale end)
            </Heading>
            <Heading color="white" mt="30px" className="font-weight-normal">
              Presale 3 Rate:
              <HighlightedText>1 BNB = 27,000&nbsp;</HighlightedText>
              GOOSEFINANCE (Presale Token) ~ $0.0129 ~16.3% lower than Listing price ($0.015)
              <br />
              This is final presale. All token unsold after presale 3 end will be burned
            </Heading>
            <Heading color="white" mt="30px" className="font-weight-normal">
              <s>
                Presale 2 Rate:
                <HighlightedText>1 BNB = 30,000</HighlightedText>
                GOOSEFINANCE (Presale Token) ~15% higher than Presale 1
              </s>
              <br />
              Presale 2 raised 6000 BNB
            </Heading>
            <Heading color="white" mt="30px" mb="20px" className="font-weight-normal">
              <s>
                Presale 1 Rate:
                <HighlightedText>1 BNB = 35,000</HighlightedText>
                GOOSEFINANCE (Presale Token)
              </s>
              <br />
              Presale 1 raised 6000 BNB
            </Heading>
            <PillButton background="teritiary" className="mr-20">
              Presale Rules
            </PillButton>
            <PillButton background="primary">Buy GOOSE FINANCE (Presale Token)</PillButton>
            <Heading color="white" mt="30px" mb="20px" className="font-weight-normal">
              <Link to="/referrals">
                *<HighlightedText>Get Referral Link</HighlightedText> to get 3% of your friends presale deposit
              </Link>
            </Heading>
          </div>
        </BaseLayout>
      </CountdownSection>
      <RulesSection>
        <StyledCard>
          <Heading size="xl" mb="20px">
            <HighlightedText>Presale Rules</HighlightedText>
          </Heading>
          <ol>
            <li>
              The presale price is 1 BNB = 35,000 $GOOSEFINANCE presale-token (~0.01$/$GOOSEFINANCE presale-token, given
              1BNB=$350. The price is same as CERBERUS presale price (a successful farm that has the same tokenomics as
              GOOSEFINANCE) at the first day when their farm opened. CERBERUS went up much higher after 3 days to $0.05
              until stabilize at around $0.02.
            </li>
            <li>
              Pancake listing price 50% higher than presale price: 1 BNB = 23,300 $GOOSEFINANCE Official Token
              (~0.015$/GOOSEFINANCE)
            </li>
            <li>
              3% BNB referral reward distributed instantly to referrer wallet via presale contract. Create your referral
              link on{' '}
              <HighlightedText>
                <Link to="/referrals">goosedefi.com/referrals</Link>
              </HighlightedText>
            </li>
            <li>Softcap: 50 BNB Hardcap: ~6,000 BNB</li>
            <li>No Contribution Limit (you can buy any amount you want)</li>
            <li>
              Max duration: 3 days. If before 3 days hardcap reached we will consider the high demand to open Presale 2
              with higher price than Presale 1. 40% of the Presale fund will be used for Thunder farming to distribute
              to GOOSEFINANCE holders, so it is better for the community if we can raise more fund and satisfy high
              demand.
            </li>
          </ol>
        </StyledCard>
      </RulesSection>
      <AnnouncementSection />
    </Page>
  )
}

export default Presale
