import React, { useContext } from 'react'
import CartProductCard from '../components/CartProductCard';
import { CartContext } from '../context/CartContext'

function Cart() {
  const {product,setProduct} = useContext(CartContext);

  const handleDelete=(id)=>{
    let updateProduct= product.filter((prod)=> prod.id!==id);
    setProduct(updateProduct)
  };

  const totalAmount= product?.reduce((prev,next)=> prev+ (next.price*next.quantity),0);


  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {product.map((product)=>
        <CartProductCard key={product.id} el={product} handleDelete={handleDelete}/>
        
        )}
      </div>
      <div>
        <h3 style={{padding:'20px 0px 0px 10px', borderTop:'2px solid grey'}}>Total Amount : {totalAmount} </h3>
      </div>
    </div>
  )
}

export default Cart