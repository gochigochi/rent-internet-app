import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--background-blue);
  border-radius: 5px;
  box-shadow: var(--button-shadow);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: .7;
  }
`

//Component
export const ButtonPrimaryLink = ({ children, to }) => {
  return (
    <Link href={to}>
      <Button>{children}</Button>
    </Link>
  )
}

export const ButtonPrimaryAction = ({ children, event }) => {
  <Button onClick={event}>{children}</Button>
}
