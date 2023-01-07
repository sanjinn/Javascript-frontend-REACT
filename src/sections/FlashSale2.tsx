import React from 'react'
import ProductTile from '../components/ProductTile'
import flashsale from '../assets/images/FlashSale1.png'
import { ProductItem } from '../models/ProductModels'

interface FlashSaleType {
  items: any
}

const FlashSale2: React.FC<FlashSaleType> = ({ items = [] }) => {
  return (
    <div className="container text-center">
      <div className="flashsale2">
        <div className="row justify-content-start">
          <div className="col-6 _image-body">
            <button className="__btn-theme">FLASH SALE</button>
            <h1>2 FOR USD $29</h1>
            <img className="_image" src={flashsale} alt="flashsale-image" />
          </div>
          <div className="col-2">
            {
              items.map((product: ProductItem) => <ProductTile key={product.articleNumber} item={product} />)
            }
          </div>
          <div className="col-2">
            {
              items.map((product: ProductItem) => <ProductTile key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default FlashSale2