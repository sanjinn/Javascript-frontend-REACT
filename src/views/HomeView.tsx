import React, {  useEffect } from 'react'
import MainMenu from '../sections/MainMenu'
import Showcase from '../sections/Showcase'
import ProductTiles from '../sections/ProductTiles'
import TopPicks from '../sections/TopPicks'
import FlashSale1 from '../sections/FlashSale1'
import FlashSale2 from '../sections/FlashSale2'
import Infobox from '../sections/Infobox'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const HomeView = () => {
    const {featured, getFeatured} = useProductContext() as ProductContextType
    const {sale, getSale} = useProductContext() as ProductContextType
    const {sale2, getSale2} = useProductContext() as ProductContextType

    useEffect(() => {
      getFeatured(8)
      getSale(4)
      getSale2(4)
    }, [])


    return (
      <>
        <header>
          <MainMenu />
          <Showcase />
        </header>
          <ProductTiles title="Featured Products" items={featured} />
          <TopPicks /> 
          <FlashSale2 items={sale2} />
          <FlashSale1 items={sale}/>
          <Infobox />
          <FooterSection />
      </>
    )
}

export default HomeView