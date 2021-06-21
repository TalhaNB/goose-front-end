import React from 'react'
import styled from 'styled-components'
import { useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import StyledButton from 'components/StyledButton'

interface IUnlockButtonProps {
  props?: any;
  children?: any;
  background?: string;
  proportion?: string;
  className?: string;
  fullWidth?: boolean;
}

const UButton = styled(StyledButton)`
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 12px;
  }
`

const UnlockButton: React.FC<IUnlockButtonProps> = ({ props, children, background, proportion, className }) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <UButton onClick={onPresentConnectModal} background={background} proportion={proportion} className={className} {...props}>
      {children ?? 'Unlock Wallet'}
    </UButton>
  )
}

export default UnlockButton
