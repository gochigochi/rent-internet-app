import styled from 'styled-components'

export const Sticky = styled.div`
    position: sticky;
    top: 5rem;
    background-color: #ffffff;
    box-shadow: var(--container-shadow);
    border-radius: 5px;
    padding: 1.5rem;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 55%;
    margin: 0 auto;
    padding: 1rem 0;
`

export const ProductImage = styled.img`
    width: 100%;
`

export const ReviewContainer = styled.div`
    position: relative;
`

export const ReviewItem = styled.p`
    font-size: .9rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;

    &:last-child {
        border-top: 1px solid var(--soft-lines-color);
        padding-top: .5rem;
        margin-top: .7rem;
        font-size: 1.2rem;
    }
`

export const Bold = styled.span`
    font-weight: 500;
`

export const Soft = styled.span`
    color: var(--soft-color);
`

export const Small = styled.span`
    color: var(--soft-color);
    font-size: .7rem;
`