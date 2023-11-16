import styled from 'styled-components'

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const FormSection = styled.div`
    padding-bottom: .8rem;
`

export const SectionTitle = styled.h4`
    font-size: 1.4rem;
    padding-bottom: .8rem;
    border-bottom: 1px solid var(--soft-lines-color);
`

export const InputContainer = styled.div`
    margin: 1rem 0;
    width: 22rem;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid var(--soft-lines-color);
    border-radius: 4px;
    padding: .6rem .8rem;

    &&::placeholder {
        color: var(--soft-color);
        font-family: var(--text-font);
    }
`

export const CheckBoxContainer = styled.div`
    display: flex;
    padding-bottom: 1.7rem;
`

export const CheckBox = styled.input`
    margin-left: 1rem;
`

export const Label = styled.label`

`

export const BillingSection = styled.div`
    overflow: hidden;
    margin-bottom: .9rem;
    max-height: ${({billingNeeded}) => billingNeeded ? '100rem' : 0};
    transition: all .5s ease-in-out;
`

export const Error = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    color: var(--alert-color);
    font-size: .7rem;
`

export const MethodSelectContainer = styled.div`
    position: relative;
    width: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--soft-lines-color);
    border-radius: 5px;
`

export const Method = styled.p`
    height: 3rem;
    width: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const MethodBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    transform: ${({paymentMethod}) => paymentMethod ? 'translateX(0)' : 'translateX(100%)'};
    border-radius: ${({paymentMethod}) => paymentMethod ? '5px 0 0 5px' : '0 5px 5px 0'};
    background-color: var(--soft-lines-color);
    transition: transform .2s ease-in-out;
`

export const CheckoutBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
`