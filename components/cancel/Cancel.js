import { SecondaryButton } from '../shared/SecondaryButton/SecondaryButton'
import {
    Container,
    Inner,
    MsjContainer,
    Msj,
    ButtonContainer,
} from './Elements'

const Cancel = () => {

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        Ocurrió un error procesando tu compra..
                        Contactar a la empresa, o algo así.
                    </Msj>
                    <ButtonContainer>
                        <SecondaryButton to="/">
                            Volver al Home
                        </SecondaryButton>
                    </ButtonContainer>
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Cancel