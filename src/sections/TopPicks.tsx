import React from 'react'
import toppick from '../assets/images/PamelaReifs.png'
import letsbe from '../assets/images/LetsBe.png'

const TopPicks: React.FC = () => {
  return (
    <section className="shopnow">
      <div className="container">
        <img src={toppick} className="toppicks-image" alt="top-pick-img" />
        <div className="toppicks-body">
          <h1>Pamela Reif's Top Picks</h1>
          <button className="_btn-theme">SHOP NOW</button>
        </div>
        <div className="letsbe-body">
          <h1>Let's Be Conscious</h1>
          <button className="__btn-theme">FLASH SALE</button>
        </div>
        <img src={letsbe} className="letsbe-image" alt="lets-be-img" />
      </div>
    </section>
  )
}

export default TopPicks