import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
   const cartItems=useSelector(store=>store.cart.items)
   console.log(cartItems)
   let show=false
   if(cartItems.length>0){
      show=true
   }
  return (

   <div className="flex justify-center pl-4 h-28">
       <div className="w-36 h-36">
          <a href="/"> <img className='logo' src={process.env.PUBLIC_URL + '/yumify.jpg'} alt="app-logo" /></a>
       </div>

       <div className="m-[0.25] p-[0.20] flex justify-center items-center list-none">
          <Link className="p-4 m-[0.25] font-[700] text-[#05b3a4] text-xl " to={"/"}><li >Home</li></Link> 
          <Link className="p-4 m-[0.25] font-[700] text-[#05b3a4] text-xl " to={"/about"}><li >About</li></Link>
          <Link className="p-4 m-[0.25] font-[700] text-[#05b3a4] text-xl " to={"/resturant/cart"} ><li >Cart {show && `(${cartItems.length})`}</li></Link>
          <Link className="p-4 m-[0.25] font-[700] text-[#05b3a4] text-xl " to={"/contact"}> <li >Contact </li></Link>
          <Link className="p-4 m-[0.25] font-[700] text-[#05b3a4] text-xl" to={"/fav"}> <li>Fav ♥ </li></Link>
       </div>
   </div>
  )
}

export default Header