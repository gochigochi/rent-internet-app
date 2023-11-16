import Bg from '/public/hero-back.png'
import { AltPrimaryButton } from '../../shared/AltPrimaryButton/AltPrimaryButton'
import { AltSecondaryButtonScroll } from '../../shared/AltSecondaryButton/AltSecondaryButton'
import {
    Container,
    BackgroundImage,
    Inner,
    ObjectContainer,
    ObjectImg,
    Content,
    Copy,
    SubCopy,
    ButtonsContainer,
} from './Elements'

const Hero = ({ content }) => {

    return (
        <Container>
            <BackgroundImage src={Bg} fill />
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Content>
                        <Copy>{content?.title}</Copy>
                        <SubCopy>{content?.subtitle}</SubCopy>
                        <ButtonsContainer>
                            <AltPrimaryButton to='/product-detail'>
                                {content?.rentbutton}
                            </AltPrimaryButton>
                            <AltSecondaryButtonScroll 
                            additionalStyle='margin-left: 3rem;'
                            to='#features-section'>
                                {content?.detailsbutton}
                            </AltSecondaryButtonScroll>
                        </ButtonsContainer>
                    </Content>
                    <ObjectContainer>
                        <ObjectImg src={content?.heroimage.src} alt='hero background' fill />
                    </ObjectContainer>
                </Inner>
            }
        </Container>
    )
}

export default Hero
