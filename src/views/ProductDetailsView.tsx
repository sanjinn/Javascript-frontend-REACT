import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import ProductDetails from '../sections/ProductDetails'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const productContext = useProductContext() as ProductContextType

    
    useEffect(() => {
        productContext.get(id)
    }, [])

    return (
    <>
        <MainMenu />
        <Breadcrumb parentPage="Products" currentPage={productContext.product.name} />
        <ProductDetails item={productContext.product} />
    </>
  )
}

export default ProductDetailsView