import React from 'react'
import styled from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'

interface ButtonProps {
  props?: any
  children?: React.ReactNode
  onClick?: any
  background?: string
  type?: string
  color?: string
  proportion?: string
  className?: string
  disabled?: boolean
  style?: any
}

const handleBackgroundColor = (color) => {
  switch (color) {
    case 'primary':
      return '#ffbc00'
    case 'secondary':
      return '#1b1464'
    case 'teritiary':
      return '#4caf50'
    case 'none':
      return 'transparent'
    default:
      return '#fff'
  }
}

const handleFontColor = (color) => {
  switch (color) {
    case 'primary':
      return '#1b1464'
    case 'secondary':
      return '#ffbc00'
    case 'teritiary':
      return '#1b1464'
    case 'white':
      return '#fff'
    default:
      return '#000'
  }
}

const handleHover = (color) => {
  switch (color) {
    case 'primary':
      return '#e9b017'
    case 'secondary':
      return '#3b3064'
    case 'teritiary':
      return '#39933d'
    default:
      return '#f7f7f740'
  }
}

const handleSize = (size) => {
  switch (size) {
    case 'sm':
      return '8px 12px'
    case 'md':
      return '15px 25px'
    case 'lg':
      return '30px 40px'
    case 'xl':
      return '35px 45px'
    default:
      return '10px 20px'
  }
}

const CustomButton = styled(Button)<{ background?: string; className?: string; proportion?: string }>`
  border-radius: 5px;
  background-color: ${(props) => handleBackgroundColor(props.background)};
  color: ${(props) => handleFontColor(props.color ?? props.background)};
  ${(props) => (props.type === 'outline' ? 'border: 1px solid white;' : '')}
  padding: ${(props) => handleSize(props.proportion)};

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: ${(props) => handleHover(props.background)};
  }

  &:active:not(:disabled):not(.button--disabled) {
    background-color: ${(props) => handleHover(props.background)};
  }

  &:disabled {
    opacity: 0.4;
  }

  i.la {
    font-size: 28px;
    margin-right: 10px;
  }
`

const StyledButton: React.FC<ButtonProps> = ({ children, disabled, style, onClick, ...props }) => (
  <CustomButton {...props} onClick={onClick} disabled={disabled} style={style}>
    {children}
  </CustomButton>
)

export default StyledButton
