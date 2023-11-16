import { useState, useEffect } from 'react'
import Detail from '../../components/detail/Detail'
import Skeleton from '../../components/detail/Skeleton'
import { getProductDetails } from '../../utils/woocommerce'
import { GetProductsContext } from '../../context/ProductsContext'

const ProductDetail = () => {

    const { products, setProducts } = GetProductsContext()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductDetails(setProducts, setLoading)
    }, [])

    return (
        <>
            {
                loading ? <Skeleton />: <Detail data={products} />
            }
        </>
    )
}

export default ProductDetail