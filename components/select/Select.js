import {
    Container,
    Label,
    Options,
    Option,
} from './Elements'

const Select = ({ options, name, text, cart, setCart }) => {

    const handleSelect = (e) => {
        setCart({
            ...cart,
            country: e.target.value,
        })
    }

    return(
        <Container>
            <Label htmlFor={name}>{text}</Label>
            <Options name={name} id={name} onChange={handleSelect}>
                {
                    options.map(option => {
                        return <Option key={option} value={option}>{option}</Option>
                    })
                }
            </Options>
        </Container>
    )
}

export default Select