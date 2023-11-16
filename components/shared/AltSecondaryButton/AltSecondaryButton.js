import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.span`
  height: var(--button-height);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity .2s ease-in-out;
  ${({addStyle}) => addStyle && addStyle}

  &:hover {
    opacity: .7;
  }
`

//Component
export const AltSecondaryButtonLink = ({ children, to }) => {
  return (
    <Link href={to}><Button>{children}</Button></Link>
  )
}

export const AltSecondaryButtonScroll = ({ children, to, additionalStyle = '' }) => {
  return (
    <a href={to}><Button addStyle={additionalStyle}>{children}</Button></a>
  )
}
