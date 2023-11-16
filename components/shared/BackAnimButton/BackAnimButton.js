import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  width: var(--button-width);
  height: var(--button-height);
  background-image: linear-gradient(
    80.81deg, var(--styled-blue) 0%, 
    var(--styled-light-blue) 50%, 
    var(--styled-blue) 100%);
  background-size: 200% auto;
  border-radius: 5px;
  box-shadow: var(--button-shadow);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: all .2s ease-in-out;

  &:hover {
    background-position: right center;
  }
`


//Component
export const ButtonPrimary = ({children, to}) => {
  return (
    <Link href={to}>
      <Button>{children}</Button>
    </Link>
  )
}