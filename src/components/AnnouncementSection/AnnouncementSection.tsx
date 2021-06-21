import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading } from '@pancakeswap-libs/uikit'
import HighlightedText from 'components/HighlightedText'
import StyledCard from 'components/StyledCard'

const CustomSection = styled.div`
  margin-top: 20px;
`

const AnnouncementSection: React.FC = () => {
  return (
    <CustomSection>
      <StyledCard>
        <Heading size="xl" mb="20px">
          <HighlightedText>
            Announcement about swapping $GOOSEFINANCEPRE to $GOOSEFINANCE Official Token after presale end:
          </HighlightedText>
        </Heading>
        <ol>
          <li>After you bought $GOOSEFINANCEPRE, just HOLD it until presale end.</li>
          <li>$GOOSEFINANCEPRE (presale token) are locked and cannot be traded/transferred until presale end</li>
          <li>All $GOOSEFINANCE token you can buy on Pancakeswap before presale end is FAKE!</li>
          <li>Don&apos;t buy or sell $GOOSEFINANCEPRE on Pancakeswap</li>
          <li>Don&apos;t add liquidity of $GOOSEFINANCEPRE on Pancakeswap, it will NOT be usable.</li>
          <li>
            The only way to buy $GOOSEFINANCEPRE is on{' '}
            <HighlightedText>
              <Link to="/presale">goosedefi.com/presale</Link>
            </HighlightedText>
          </li>
          <li>
            Only after presale end, you can swap your $GOOSEFINANCEPRE to the Official $GOOSEFINANCE token at 1:1 ratio.
          </li>
          <li>
            You can go to{' '}
            <HighlightedText>
              <Link to="/referrals">goosedefi.com/referrals</Link>
            </HighlightedText>{' '}
            to get referrals link and refer your friend to presale to get 3% of their presale deposit
          </li>
          <li>
            Please hold $GOOSEFINANCEPRE and wait for presale end and swap to $GOOSEFINANCE (Official Token) on{' '}
            <HighlightedText>
              <Link to="/swap">goosedefi.com/swap</Link>
            </HighlightedText>
          </li>
          <li>
            You can start to swap $GOOSEFINANCEPRE to $GOOSEFINANCE (Official Token) on presale end till forever ONLY on{' '}
            <HighlightedText>
              <Link to="/swap">goosedefi.com/swap</Link>
            </HighlightedText>
          </li>
        </ol>
      </StyledCard>
    </CustomSection>
  )
}

export default AnnouncementSection
