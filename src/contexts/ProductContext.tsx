import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductItem } from "../models/ProductModels"

interface ProductProviderType {
  children: any
}

export interface ProductContextType {
  product: ProductItem
  products: ProductItem[]
  featured: ProductItem[]
  sale: ProductItem[]
  sale2: ProductItem[]
  get: (articleNumber?: string) => void
  getAll: () => void
  getFeatured: (take?: number) => void
  getSale: (take?: number) => void
  getSale2: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

const  ProductProvider: React.FC<ProductProviderType> = ({children}) => {
  const baseUrl:string = 'http://localhost:5000/api/products'
  const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber: '', description: '', name: '', category: '', price: 0, imageName: '' }

  const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
  const [products, setProducts] = useState<ProductItem[]>([])
  const [featured, setFeatured] = useState<ProductItem[]>([])
  const [sale, setSale] = useState<ProductItem[]>([])
  const [sale2, setSale2] = useState<ProductItem[]>([])
  
  const get = async (articleNumber?: string) => { 
    if (articleNumber !== undefined) {
      const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
      setProduct(await res.json())
    }
  }

  const getAll = async () => {
    const res = await fetch(baseUrl)
    setProducts(await res.json())
  }

  const getFeatured = async (take: number = 0) => {
    let url = `${baseUrl}/featured`
    
    if (take !== 0)
      url += `/${take}`

    const res = await fetch(url)
    setFeatured(await res.json())
  }

  const getSale = async (take: number = 0) => {
    let url = `${baseUrl}/sale`
    
    if (take !== 0)
      url += `/${take}`

    const res = await fetch(url)
    setSale(await res.json())
  }
  const getSale2 = async (take: number = 0) => {
    let url = `${baseUrl}/sale2`
    
    if (take !== 0)
      url += `/${take}`

    const res = await fetch(url)
    setSale2(await res.json())
  }


  return <ProductContext.Provider value={{product, products, featured, sale, sale2, get, getAll, getFeatured, getSale, getSale2}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider