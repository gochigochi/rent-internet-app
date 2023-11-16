import { useState } from 'react'
import { ActionButton } from '../shared/ActionButton/ActionButton'
import { GetCartContext } from '../../context/CartContext'
import { CreateWooCommerceTransferOrder } from '../../pages/api/create-woo-transfer-order'
import {
    ButtonContainer,
    Container,
    Inner,
    Msj,
    MsjContainer,
} from './Elements'

const Transfer = () => {

    const { cart } = GetCartContext()
    const [disabledButton, setDisabledButton] = useState(false)
    const [orderId, setOrderId] = useState(0)

    const placeOrder = () => {
        if (Object.entries(cart).length === 0) return console.log('No items in cart')
        setDisabledButton(true)

        CreateWooCommerceTransferOrder(cart)
            .then(res => {
                console.log('res...............', res.data)
                setDisabledButton(false)
                setOrderId(res.data.id)

                //Send mail
            })
            .catch(() => console.log('Error setting order in Woocommerce'))
    }

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        {
                            orderId === 0 ?    
                            <>
                                ***Texto para transferencia.<br></br>
                                Explica que la orden llega a la empresa una vez que da click al botón, pero no es efectiva hasta que no paga (queda pendiente). Inluir resumen de la reserva?
                            </> :
                            <>
                                ***La orden fue recibida con éxito...<br></br>
                                Número de orden (id) es {orderId}
                            </>
                        }
                    </Msj>
                    {
                        orderId === 0 &&
                        <ButtonContainer>
                            <ActionButton
                                type="Button"
                                event={placeOrder}
                                disabled={disabledButton}
                                text="Alquilar"
                            />
                        </ButtonContainer>
                    }
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Transfer