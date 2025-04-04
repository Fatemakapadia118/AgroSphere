// filepath: /c:/Users/User-10/Documents/react tutorial/food del/frontend/src/pages/PlaceOrder/PlaceOrder.jsx
import React, { useContext } from 'react'
import { StoreContext } from '../../Componenets/Context/StroreContext'
import './PlaceOrder.css';

function PlaceOrder() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name:'/>
          <input type="text" placeholder='Last Name:' />
        </div>
        <input type="email" placeholder='Email Adress:' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code:'/>
          <input type="text" placeholder='Country:' />
        </div>
        <input type="text" placeholder='Phone' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart_total-details">
            <p>SubTotal</p>
            <p>Rs.{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart_total-details">
            <p>Delivery Fee</p>
            <p>Rs.{2}</p>
          </div>
          <hr />
          <div className="cart_total-details">
            <b>Total:</b>
            <b>Rs.{getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
      </div>

      </div>
    </form>
  )
}

export default PlaceOrder