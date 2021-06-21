import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Text } from '@pancakeswap-libs/uikit'
import { CoinsIcon } from 'react-line-awesome'
import Page from 'components/layout/Page'
import Section from 'components/layout/Section'
import HighlightedText from 'components/HighlightedText'
import StyledButton from 'components/StyledButton'
import AnnouncementSection from 'components/AnnouncementSection'

const Swap: React.FC = () => {
  return (
    <Page>
      <Section>
        <HighlightedText>
          <Heading size="xl" color="white" mb="30px">
            Swap PreSale Token To Official GOOSEFINANCE Token
          </Heading>
        </HighlightedText>
        <BaseLayout>
          <div className="span-3 text-center">
            <img alt="" src="/images/logo.png" />
          </div>
          <div className="span-9 text-center">
            <StyledButton type="outline" background="none" color="white">
              <CoinsIcon />
              Your current pre-sale Tokens:&nbsp;
              <HighlightedText>0</HighlightedText>
            </StyledButton>
            <br />
            <br />
            <StyledButton type="outline" background="none" color="white">
              <CoinsIcon />
              Your current Official GOOSEFINANCE Tokens:&nbsp;
              <HighlightedText>0 GOOSEFINANCE</HighlightedText>
            </StyledButton>
            <br />
            <br />
            <Text color="white">You will receive after swap</Text>
            <br />
            <StyledButton type="outline" background="none" color="white">
              <CoinsIcon />
              Official GOOSEFINANCE Tokens:&nbsp;
              <HighlightedText>0 GOOSEFINANCE</HighlightedText>
            </StyledButton>
          </div>
        </BaseLayout>
      </Section>
      <AnnouncementSection />
    </Page>
  )
}

export default Swap
