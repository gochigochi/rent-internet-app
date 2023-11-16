import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(138.9deg, #3483FA 43.95%, #1966D1 43.95%, #1966D1 61.9%);
    padding-bottom: 3rem;
`

export const ProductContainer = styled.article`
    margin: 0 auto;
    padding-bottom: 1.5rem;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 4.5rem;
    display: flex;
`

export const LeftContainer = styled.div`
    width: 30%;
    margin-left: 2rem;
`


export const RightContainer = styled.div`
    width: 60%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    margin-left: 5rem;
`

export const Title = styled.h1`
    border-bottom: 1px solid var(--soft-lines-color);
    font-size: 2.5rem;
    padding-bottom: .7rem;
    margin-bottom: .5rem;
`

export const Description = styled.p`

`

export const Error = styled.p`

`

export const CheckBoxContainer = styled.div`
    width: 100%;
    border-top: 1px solid var(--soft-lines-color);
    border-bottom: 1px solid var(--soft-lines-color);
    padding: 1rem 0;
    margin-bottom: 2rem;
`

//SKELETON

export const SkeletonContainer = styled.div`
    width: 100%;
    background: linear-gradient(138.9deg, #3483FA 43.95%, #1966D1 43.95%, #1966D1 61.9%);
    padding-bottom: 3rem;
`