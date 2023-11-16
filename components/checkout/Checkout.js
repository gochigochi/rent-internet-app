import { useState, useEffect } from 'react'
import { GetCartContext } from '../../context/CartContext'
import { GetProductsContext } from '../../context/ProductsContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import Summary from '../summary/Summary'
import { PrimaryButton } from '../shared/PrimaryButton/PrimaryButton'
import {
    Container,
    CheckoutContainer,
    LeftContainer,
    RightContainer,
    EmptyCartContainer,
    Msj,
    EmptyCartInner,
    ButtonContainer,
} from './Elements'

const Checkout = () => {

    const { cart, setCart } = GetCartContext()
    const { products } = GetProductsContext()
    const [mainProduct, setMainProduct] = useState({})

    useEffect(() => {
        if (products.length !== 0) {
            setMainProduct(products.find(item => item.name === "Modem"))
        }
    }, [])

    return (
        <Container>
            <CheckoutContainer>
                {
                    Object.values(cart).length === 0 ?
                        <EmptyCartContainer>
                            <EmptyCartInner>
                                <Msj>No has hecho ninguna reserva</Msj>
                                <ButtonContainer>
                                    <PrimaryButton to='product-detail'>Rentar</PrimaryButton>
                                </ButtonContainer>
                            </EmptyCartInner>
                        </EmptyCartContainer> :
                        <>
                            <RightContainer>
                                <CheckoutForm cart={cart} setCart={setCart} />
                            </RightContainer>
                            <LeftContainer>
                                {
                                    Object.values(mainProduct).length !== 0 &&
                                    <Summary cart={cart} mainProduct={mainProduct} />
                                }
                            </LeftContainer>
                        </>
                }
            </CheckoutContainer>
        </Container>
    )
}

export default Checkout