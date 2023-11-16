import { useState, useContext, createContext } from 'react'

const CartCtx = createContext()
export const GetCartContext = () => useContext(CartCtx)

const CartContext = ({ children }) => {

    const [ cart, setCart ] = useState({})

    return (
        <CartCtx.Provider value={{ cart, setCart }}>
            {children}
        </CartCtx.Provider>
  )
}

export default CartContext