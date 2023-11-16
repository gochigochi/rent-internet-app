import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    margin-top: 3.5rem;
    min-height: var(--section-min-height);
    background-color: var(--main-dark-blue);
    padding: 5rem 0;
`

export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
`

export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
`

export const Accordion = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: var(--general-shadow);
    z-index: 2;
`

export const Item = styled.div`
    border-bottom: 1px solid var(--soft-lines-color);
    padding-bottom: .5rem;
    margin: .5rem 0;
`

export const Qcontainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding-right: 3rem;
`

export const ChevContainer = styled.div`
    position: relative;
    width: .7rem;
    height: .7rem;
    align-self: center;
    transition: all .2s ease-in-out;
    ${({open}) => open && 'transform: rotate(180deg);'}
`

export const Chevron = styled(Image)`
    margin: 0 auto;
    object-fit: cover;
`

export const Acontainer = styled.div`
overflow: hidden;
    max-height: ${({open}) => open ? '100rem' : 0};
    transition: all .2s ease-in-out;
`

export const Q = styled.p`
    font-weight: 600;
`

export const A = styled.p`
    padding-top: 1rem;
`