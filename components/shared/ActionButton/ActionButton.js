import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader/Loader'

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
  opacity: ${({ dis }) => dis ? '.7' : '1'};

  &:hover {
    opacity: .7;
  }
`

//Component
export const ActionButton = ({ type, disabled, text, event }) => {

    return (
        <Button
            type={type}
            disabled={disabled}
            dis={disabled}
            onClick={event}
        >
            {
                disabled ? <Loader /> : text
            }
        </Button>
    )
}