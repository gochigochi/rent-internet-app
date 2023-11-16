import { SecondaryButton } from '../shared/SecondaryButton/SecondaryButton'
import {
    Container,
    Inner,
    MsjContainer,
    Msj,
    ButtonContainer,
} from './Elements'

const Success = () => {

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        La compra fue exitosa. 
                        Mail en casilla.
                    </Msj>
                    <ButtonContainer>
                        <SecondaryButton to="/">
                            Ir al Home
                        </SecondaryButton>
                    </ButtonContainer>
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Success