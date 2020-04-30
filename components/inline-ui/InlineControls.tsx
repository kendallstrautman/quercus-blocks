import styled from 'styled-components'
import { Button as TinaButton } from '@tinacms/styles'

export const InlineControls = styled(({ children, ...styleProps }: any) => {
  return <div {...styleProps}>{children}</div>
})`
  position: fixed;
  bottom: 1rem;
  margin-left: 1rem;
  display: flex;
  overflow: visible;
  z-index: 1000;

  ${TinaButton} {
    font-size: 16px;
    height: 44px;
    outline: none !important;
  }

  button {
    margin-right: 1rem;
    text-transform: none;
    opacity: 1;
  }
`
