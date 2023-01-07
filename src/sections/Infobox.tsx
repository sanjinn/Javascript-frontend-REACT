import React from 'react'
import deliverytruck from '../assets/images/deliverytruck.svg'
import customersupport from '../assets/images/customersupport.svg'
import creditcard from '../assets/images/creditcard.svg'

const Infobox: React.FC = () => {
  return (
    <section className="infobox">
        <div className="container">
            <div className="infoboxes">
                <img src={customersupport} alt="customer-service-image"/>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="infoboxes">
                <img src={creditcard} alt="customer-service-image"/>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
                
            </div>
            <div className="infoboxes">
                <img src={deliverytruck} alt="customer-service-image"/>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="infoboxes">
                <img src={deliverytruck} alt="customer-service-image"/>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default Infobox