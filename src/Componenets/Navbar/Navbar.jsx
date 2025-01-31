import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router'
import { StoreContext } from '../Context/StroreContext'
function Navbar({setShowLogin}) {
  const [menu,Setmenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className='logo'></img> </Link>
     <ul className='navbar-menu'>
       <Link to='/' onClick={()=>Setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
       <a href="#explore-menu" onClick={()=>Setmenu("category")} className={menu==="category"?"active":""}>Category</a>
       <a href="#app-download" onClick={()=>Setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
       <a href="#footer" onClick={()=>Setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a> 
     </ul> 
     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
     </div>
    </div>
  )
}

export default Navbar 
