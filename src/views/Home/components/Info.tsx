import React from 'react'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import StyledCard from 'components/StyledCard'
import HighlightedText from 'components/HighlightedText'

const Info = () => {
  return (
    <StyledCard header="Mine to hold - Hold to earn - Earn to die">
      <BaseLayout>
        <div className="span-4">
          <HighlightedText>
            <Heading mb="10px">Earn - Effortless Rewards by Holding</Heading>
          </HighlightedText>
          <Text color="white" mb="20px">
            A 8% transaction fee is redistributed proportionally to all GOOSEFINANCE holders. Just hold your tokens and
            watch your wallet balance climb steadily.
          </Text>

          <HighlightedText>
            <Heading mb="10px">Earn - 3rd Party Farming Rewards with Zero Transaction Fee</Heading>
          </HighlightedText>
          <Text color="white">
            Unlike Safemoon, Goose Finance is the first farmable RFI coin that you can farm in other yield farms
            tax-free using our special Thunder Alliance mechanism. We are partnering with reputable farms that known for
            their safe, non-rug pull environment, so you can stake Goose Finance and earn their tokens without paying
            10% deposit/withdraw/harvest transaction fee like Safemoon and other RFI tokens.
          </Text>
        </div>
        <div className="span-4">
          <HighlightedText>
            <Heading mb="10px">Earn - Double Staking Rewards</Heading>
          </HighlightedText>
          <Text color="white" mb="20px">
            GOOSEFINANCE is the first coin of its kind to offer fee-free staking using our special Thunder Boost
            mechanism. Place your Goose Finance in one of our earning pools to earn 3rd-party tokens like BNB, BUSD,
            CERBERUS... while continuing to collect your effortless rewards.
          </Text>

          <HighlightedText>
            <Heading mb="10px">&quot;Earn like hell&quot; mechanism</Heading>
          </HighlightedText>
          <Text color="white" mb="20px">
            40% of presale fund and 50% of deposit fee will be redistribute to GOOSEFINANCE holders via our Thunder
            famrs, where you can stake GOOSEFINANCE to earn precious token like BUSD, BNB...
          </Text>

          <HighlightedText>
            <Heading mb="10px">Earn - Airdropped Rewards</Heading>
          </HighlightedText>
          <Text color="white">
            A series of generous airdrop programs help hollders receive extra GOOSEFINANCE Tokens via airdrops every
            day, every week.
          </Text>
        </div>
        <div className="span-4">
          <HighlightedText>
            <Heading mb="10px">Earn - Liquidity Mining Rewards</Heading>
          </HighlightedText>
          <Text color="white" mb="20px">
            GOOSEFINANCE using the proven tokenomics of goCerberus, a successful project with $35M+ TVL and a
            sustainable 4000%++ APR. So mining GOOSEFINANCE will have a very high APR and sustained for a long time like
            goCerberus.
          </Text>

          <HighlightedText>
            <Heading mb="10px">Earn - Big Holder Contests</Heading>
          </HighlightedText>
          <Text color="white">
            8 weeks after launch top 1000 holders will have a lucky draw, one lucky winner will have a BIG Prize worth
            $230K.
          </Text>
        </div>
      </BaseLayout>
    </StyledCard>
  )
}

export default Info
