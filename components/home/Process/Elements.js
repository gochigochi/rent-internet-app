import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    margin-top: 5.5rem;
    min-height: var(--section-min-height);
`

export const BackgroundImage = styled(Image)`
    object-fit: cover;
    background-attachment: fixed;
    z-index: 0;
`

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    opacity: .7;
    z-index: 1;
`

export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h2`
    color: #ffffff;
    font-size: 3rem;
    margin: 3rem 0;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`

export const Card = styled.div`
    position: relative;
    background-color: rgba(250, 250, 250, 0.8);
    width: 40%;
    padding: 1rem 2rem;
    margin: 2rem;
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: rgba(250, 250, 250, 1);
    }
`

export const Title = styled.p`
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--text-primary-color);
    padding: 1rem 0;
`

export const Text = styled.p`

`