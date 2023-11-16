import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    position: relative;
    width: 100%;
`

export const BackgroundImage = styled(Image)`
    object-fit: cover;
    z-index: 0;
`
export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    height: 37rem;
    z-index: 2;
`

export const ObjectContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 32rem;
    width: 32rem;
    aspect-ratio: 16/9;
`

export const ObjectImg = styled(Image)`
    margin: 0 auto;
    object-fit: contain;
`

export const Content = styled.div`
    position: relative;
    top: 6.5rem;
    width: 70%;
`

export const Copy = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;
    color: #ffffff;
`

export const SubCopy = styled.p`
    font-size: 1.7rem;
    margin-top: .8rem;
    color: #ffffff;
`

export const ButtonsContainer = styled.div`
    position: relative;
    margin-top: 3rem;
    display: flex;
`

export const SmallContainer = styled.section`
    position: relative;
    width: 100%;
`

export const IconsContainer = styled.div`
    width: 85%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    padding: 7rem 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const IconImageContainer = styled.div`
    position: relative;
    height: 4.5rem;
    aspect-ratio: 16/9;
`

export const Icon = styled(Image)`   
    object-fit: contain;
`

export const Text = styled.p`
    font-size: .8rem;
    text-align: center;
`