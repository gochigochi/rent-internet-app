import {
    ImageContainer,
    ProductImage,
    ReviewContainer,
    ReviewItem,
    Sticky,
    Bold,
    Soft,
    Small,
} from './Elements'


const Summary = ({ cart, mainProduct }) => {

    return (
        <Sticky>
            <ImageContainer>
                <ProductImage src={mainProduct.images[0].src} alt={mainProduct.images[0].alt} />
            </ImageContainer>
            <ReviewContainer>
                <ReviewItem>
                    <Bold>Modem </Bold>
                    <Soft>
                        u$d {cart.mainProductPrice} 
                        <Small>
                            {' '}({cart.qty} semana{cart.qty > 1 && 's'})
                        </Small>
                    </Soft>
                </ReviewItem>
                <ReviewItem>
                    <Bold>Depósito </Bold>
                    <Soft>
                        u$d ...
                    </Soft>
                </ReviewItem>
                <ReviewItem>
                    <Bold>Envío </Bold>
                    <Soft>
                        u$d {cart.shippingFee}
                    </Soft>
                </ReviewItem>
                {/* <ReviewItem>
                        <Bold>Subtotal:</Bold> u$d {cart.subtotal}
                    </ReviewItem> */}
                {
                    cart.adapter.is === true &&
                    <ReviewItem>
                        <Bold>Adaptador </Bold>
                        <Soft>
                            u$d {cart.adapter.product.price}
                        </Soft>
                    </ReviewItem>
                }
                {
                    cart.powerBank.is === true &&
                    <ReviewItem>
                        <Bold>Cargador </Bold>
                        <Soft>
                            u$d {cart.powerBank.product.price}
                        </Soft>
                    </ReviewItem>
                }
                <ReviewItem>
                    <Bold>Total </Bold>
                    <Soft>
                        u$d {cart.total}
                    </Soft>
                </ReviewItem>
            </ReviewContainer>
        </Sticky>
    )
}

export default Summary