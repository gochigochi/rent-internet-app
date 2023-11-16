import '../styles/globals.css'
import ProductsContext from '../context/ProductsContext'
import CartContext from '../context/CartContext'
import Layout  from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <ProductsContext>
      <CartContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext>
    </ProductsContext>
  )
}

export default MyApp
