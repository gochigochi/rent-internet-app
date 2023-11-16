import NavBar from "./NavBar/NavBar"
import styled from 'styled-components'
import Footer from "./Footer/Footer"

//Styles
const LayoutContainer = styled.div`
  width: 100%;
`

//Component
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </LayoutContainer>
  )
}

export default Layout