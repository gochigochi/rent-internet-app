import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    min-height: var(--section-min-height);
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Inner = styled.div`
    position: relative;
    width: 85%;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-around;
`

export const InnerSection = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;

    &:nth-child(2) {
        border-left: 1px solid var(--soft-lines-color);
        border-right: 1px solid var(--soft-lines-color);
        width: 35%;
    }
`

export const Links = styled.ul``

export const LinkContainer = styled.li`
    font-size: .8rem;
    margin-bottom: 1rem;
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .7;
    }
`

export const SocialIcons = styled.ul`
    display: flex;
`

export const IconContainer = styled.li`
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem;
    cursor: pointer;
    
    &:hover {
        opacity: .7;
    }
    `

export const Icon = styled(Image)`
    object-fit: cover;
`

export const LogoContainer = styled.div`
    position: relative;
    width: 7rem;
    height: 3rem;
`

export const LogoImage = styled(Image)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`

export const CopyRight = styled.p`
    text-align: center;
    font-size: .8rem;
    position: absolute;
    bottom: .5rem;
    width: 100%;
`