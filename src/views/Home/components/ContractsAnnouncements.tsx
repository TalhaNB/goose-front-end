import React from 'react'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import StyledCard from 'components/StyledCard'

const ContractsAnnouncements = () => {
  return (
    <BaseLayout className="mt-20">
      <StyledCard header="Contracts" className="span-8">
        Contracts
      </StyledCard>
      <StyledCard header="Announcements" className="span-4">
        Announcements
      </StyledCard>
    </BaseLayout>
  )
}

export default ContractsAnnouncements
