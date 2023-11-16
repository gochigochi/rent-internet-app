import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/future/image'

export const Container = styled.header`
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 999;
    padding: .5rem 0;
`

export const Inner = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 6rem;
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    background-color: #ffffff;
`

export const Logo = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const Nav = styled.nav`
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`

export const LinkContainer = styled.li`
    padding-left: 3.5rem;
    transition: opacity .2s ease-in-out;
    font-size: .9rem;

    &:hover {
        opacity: .7;
    }
`

export const PageLink = styled(Link)`

`