import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {BsCart3} from 'react-icons/bs';
import Style from '../styles/navbar.module.css';
import { CartContext } from '../context/CartContext';


function Navbar() {
  const {product} = useContext(CartContext);
  return (
    <div className={Style.mainNavDiv}>
        <div>
            <h3>TeeRex Store</h3>
        </div>
        <div className={Style.cartMainDiv}>
            <Link to="/"><h3>Products</h3></Link>
            <div className={Style.cart}>
            <Link to="/cart"><BsCart3 style={{width:'40px', height:'20px'}}/></Link>
            <h4>{product.length}</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar