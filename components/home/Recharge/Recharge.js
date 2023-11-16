import { ButtonPrimaryLink } from '../../shared/ButtonPrimary/ButtonPrimary'
import {
    Container,
    Inner,
    Content,
    Title,
    Text,
    ImageContainer,
    SideImage,
} from './Elements'

const Recharge = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Inner>
                        <Content>
                            <Title>{content.title}</Title>
                            <Text>{content.text}</Text>
                            <ButtonPrimaryLink to="/recharge-checkout">
                                Recargar
                            </ButtonPrimaryLink>
                        </Content>
                        <ImageContainer>
                            <SideImage src={content.img.src} alt={content.img.alt} fill/>
                        </ImageContainer>
                    </Inner>
                </>
            }
        </Container>
    )
}

export default Recharge