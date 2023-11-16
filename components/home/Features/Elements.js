import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 3.5rem;
`

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
`

export const Item = styled.div`
    flex-basis: 30%;
    width: 18rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
`

export const IconImageContainer = styled.div`
    position: relative;
    height: 9rem;
    aspect-ratio: 16/9;
`

export const Icon = styled(Image)`   
    object-fit: contain;
`

export const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
    width: 80%;
    margin: 0 auto;
    padding-bottom: .5rem;
    border-bottom: 1px solid var(--soft-lines-color);
`

export const Text = styled.p`
    font-size: .8rem;
    width: 80%;
    margin: 1rem auto 0 auto;
`