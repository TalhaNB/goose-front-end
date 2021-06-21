import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { EllipsisVIcon } from 'react-line-awesome'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'
import StyledButton from 'components/StyledButton'
import PillButton from 'components/PillButton'
import ApyButton from './ApyButton'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFeeBP?: number
  farmImage?: string
  tokenSymbol?: string
  toggleMore?: any
  translateString?: any
  quoteTokenAdresses?: any
  quoteTokenSymbol?: any
  tokenAddresses?: any
  cakePrice?: any
  apy?: any
  farm?: any
  farmAPY?: any
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }

  .more-button {
    border: 0;
    box-shadow: none;
    padding: 5px;
    margin-left: 5px;
  }

  i.la {
    color: white;
    margin: 0;
  }

  .title-name {
    align-self: flex-start;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  align-self: flex-start;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  risk,
  farmImage,
  toggleMore,
  translateString,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  cakePrice,
  farm,
  farmAPY,
}) => {
  const { multiplier, depositFeeBP, tokenSymbol, apy } = farm

  return (
    <>
      <Wrapper alignItems="center" mb="12px">
        <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} marginRight="10px" />
        <Flex flexDirection="column" alignItems="flex-start" mr="auto">
          <Heading mb="4px" className="title-name">
            {lpLabel}
          </Heading>
          <Flex justifyContent="center">
            {depositFeeBP === 0 ? <NoFeeTag /> : null}
            {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
            {/* <RiskTag risk={risk} /> */}
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          </Flex>
        </Flex>
        <PillButton proportion="sm" background="primary">
          Unlock Wallet
        </PillButton>
        <StyledButton background="none" onClick={toggleMore} className="more-button">
          <EllipsisVIcon />
        </StyledButton>
      </Wrapper>
      <Flex justifyContent="space-between" alignItems="center" mr="150px">
        <Flex alignItems="center">
          <ApyButton
            lpLabel={lpLabel}
            quoteTokenAdresses={quoteTokenAdresses}
            quoteTokenSymbol={quoteTokenSymbol}
            tokenAddresses={tokenAddresses}
            cakePrice={cakePrice}
            apy={apy}
          />
          APR: NA%
        </Flex>
        <Flex alignItems="center">
          <Text>{translateString(352, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm?.apy ? <>{farmAPY}%</> : <Skeleton height={24} width={80} />}
          </Text>
        </Flex>
        <div>TVL: 0%</div>
      </Flex>
    </>
  )
}

export default CardHeading
