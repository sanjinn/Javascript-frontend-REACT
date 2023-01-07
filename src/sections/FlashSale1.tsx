import React from 'react'
import ProductTile from '../components/ProductTile'
import flashsale from '../assets/images/FlashSale2.png'
import { ProductItem } from '../models/ProductModels'

interface FlashSaleType {
  items: any
}

const FlashSale1: React.FC<FlashSaleType> = ({ items = [] }) => {
  return (
    <div className="container text-center">
      <div className="flashsale1">
        <div className="row justify-content-end">
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
          <div className="col-6 _image-body">
            <h1>2 FOR USD $49</h1>
            <button className="__btn-theme">FLASH SALE</button>
            <img className="_image" src={flashsale} alt="flashsale-image" />
          </div>
        </div>
      </div>
    </div >

  )
}

export default FlashSale1