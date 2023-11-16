import {
    Container,
    Label,
    Checkbox,
} from './Elements'

const CheckBox = ({ label, value, extraProductData, cart, setCart }) => {

    const handleChange = (e) => {

        const total = !e.target.checked ?
            cart.total - parseInt(cart[e.target.value].product.price) : 
            cart.total + parseInt(cart[e.target.value].product.price)

        setCart({
            ...cart,
            [e.target.value]: {
                ...extraProductData, is: e.target.checked,
            },
            total: total
        })
    }

    return (
        <Container>
            <Checkbox
                type='checkbox'
                value={value}
                onChange={handleChange} />
            <Label>{label}</Label>
        </Container>
    )
}

export default CheckBox