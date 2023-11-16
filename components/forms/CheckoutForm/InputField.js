import {
    InputContainer,
    Input,
    Error,
} from './Elements'

const InputField = ({
    id,
    name,
    type,
    value,
    event,
    placeholder,
    error,
    touched,
}) => {


    return (
        <InputContainer>
            <Input 
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={event}
                placeholder={placeholder}
            />
            { error && touched.name && <Error>{error}</Error>}
        </InputContainer>
    )
}

export default InputField