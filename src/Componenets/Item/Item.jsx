import React, { useState } from 'react'
import './Item.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../Context/StroreContext';
import { useContext } from 'react';

function Item({ id, name, price, description, image }) {
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='item'>
      <div className="item-img-container">
        <img className="item-image" src={image} alt="" />
        { !cartItems[id]
             ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
             :<div className='item-counter' >
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""></img>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""></img>
             </div>
        }
      </div>
      <div className="item-info">
        <div className="item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="" />
        </div>
      </div>
      <p className="item-description">{description}</p>
      <p className="item-price">${price}</p>
    </div>
  )
}

export default Item