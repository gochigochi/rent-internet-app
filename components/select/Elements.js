import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width:10rem;
`

export const Label = styled.label`
    margin-bottom: .3rem;
`

export const Options = styled.select`

`

export const Option = styled.option`

    &:first-letter{
        text-transform: capitalize;
    }
`