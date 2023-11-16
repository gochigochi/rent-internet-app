import { useState, useContext, createContext } from 'react'

const ProductsCtx = createContext()
export const GetProductsContext = () => useContext(ProductsCtx)

const ProductsContext = ({ children }) => {

    const [ products, setProducts ] = useState([])

    return (
        <ProductsCtx.Provider value={{ products, setProducts }}>
            {children}
        </ProductsCtx.Provider>
  )
}

export default ProductsContext