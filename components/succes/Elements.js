import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: linear-gradient(208.39deg, #1966D1 57.39%, #3483FA 57.39%);
`

export const Inner = styled.article`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MsjContainer = styled.div`
    width: 30rem;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: var(--container-shadow);
    border-radius: 5px;
`

export const Msj = styled.p`
    margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`