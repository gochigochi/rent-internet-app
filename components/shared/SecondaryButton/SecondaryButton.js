import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.span`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--main-dark-blue);
  color: var(--main-dark-blue);
  font-size: 1rem;
  font-weight: 500;
  transition: opacity .2s ease-in-out;
  cursor: pointer;
  ${({addStyle}) => addStyle && addStyle}

  &:hover {
    opacity: .7;
  }
`

//Component
export const SecondaryButton = ({ children, to }) => {
  return (
    <Link href={to}><Button>{children}</Button></Link>
  )
}

export const SecondaryButtonScroll = ({ children, to, additionalStyle = '' }) => {
  return (
    <a href={to}><Button addStyle={additionalStyle}>{children}</Button></a>
  )
}
