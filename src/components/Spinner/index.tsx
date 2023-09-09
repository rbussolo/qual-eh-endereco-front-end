import { styled } from "styled-components"

interface SpinnerContainerProps {
  borderSize: number;
  size: number
}

const SpinnerContainer = styled.div<SpinnerContainerProps>`
  border: ${props => props.borderSize}px solid #f3f3f3;
  border-top: ${props => props.borderSize}px solid ${props => props.theme['gray-500']};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 1 }: SpinnerProps) {
  const spinnerBorderSize = size * 16 / 8;
  const spinnerSize = size * 16;

  return (
    <SpinnerContainer size={spinnerSize} borderSize={spinnerBorderSize} />
  )
}