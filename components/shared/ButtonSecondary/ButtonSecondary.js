import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  width: var(--button-width);
  height: var(--button-height);
  border-radius: 5px;
  color: var(--primary-color);
  font-size: 1rem;
  transition: all .5 ease-in-out;
  box-shadow: var(--button-shadow);
  background: #ffffff;
  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: .7;
  }

`

//Component
export const ButtonSecondaryPage = ({children}) => {
  return (
    <Button>{children}</Button>
  )
}

export const ButtonSecondaryLink = ({children, to}) => {
  return (
    <Link href={to}>
      <Button>{children}</Button>
    </Link>
  )
}
