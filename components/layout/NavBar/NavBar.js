import Link from 'next/link'
import { useRouter } from 'next/router'
import Lg from '/public/rent-internet-logo.png'
import {
    Container,
    Inner,
    LogoContainer,
    Logo,
    Nav,
    Links,
    LinkContainer,
} from './Elements'

const NavBar = () => {

    const router = useRouter()

    const toTop = () => scrollTo(top)

    return (
        <Container>
            <Inner>
                {
                    router.pathname === '/' ?
                    <LogoContainer onClick={toTop}>
                        <Logo src={Lg} alt='logo' />
                    </LogoContainer> :
                    <Link href='/'>
                        <LogoContainer>
                            <Logo src={Lg} alt='logo' />
                        </LogoContainer>
                    </Link>
                }
                <Nav>
                    <Links>
                        <LinkContainer>
                            <Link href='/product-detail'>
                                Rentar
                            </Link>
                        </LinkContainer>
                        <LinkContainer>
                            <Link href='/'>
                                Recargas
                            </Link>
                        </LinkContainer>
                        {
                            router.pathname === '/' &&
                            <LinkContainer>
                                <a href='#faq-section'>FAQ</a>
                            </LinkContainer>
                        }
                    </Links>
                </Nav>
            </Inner>
        </Container>
    )
}

export default NavBar