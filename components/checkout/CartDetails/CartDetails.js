import {
    CartDetailsContainer,
} from './Elements'

const CartDetails = ({ cart }) => {
  return (
    <CartDetailsContainer>
        <p>Fechas: From {cart.from} to {cart.to}</p>
        <p>Subtotal: u$s{cart.subtotal}</p>
        <p>Shipping Fee: u$s{cart.shippingFee}</p>
        <p>Total: u$s{cart.total}</p>
    </CartDetailsContainer>
  )
}

export default CartDetails