import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({el}) {
  const {product,setProduct}= useContext(CartContext);
  const {imageURL,name,price}= el;

  const AddToCart=()=>{
    let newprod={
      id: el.id,
      imageURL,
      name,
      price,
      quantity:1,
      availableqty: el.quantity
    }
    // console.log(product);
    const Exist = product?.filter((prod)=> prod.id===el.id);
    // console.log(Exist);
    if(Exist.length<1 && el.quantity>0){
      setProduct([...product,newprod])
    }
// This Condition will check if the product quantity already out of stock
    else if(el.quantity==0){
      alert("Product is Out of Stock!!!")
    }
  }

  const Existcart= product.filter((prod)=> prod.id===el.id);
  // console.log(Existcart);

  // handling the count of Cart Item

  const handleCount = (id, amount) => {
    let updatedqty = product.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + amount
        };
      } else {
        return item;
      }
    });
    setProduct(updatedqty);
  };

  const handleIncrementAndAlert=()=>{
    
    if(Existcart[0].quantity>=el.quantity){
      alert('You Reached Maximum Limit')
    }else{
      handleCount(el.id, +1)
    }
  }

  return (
    <div style={{backgroundColor:'#f2f2f2', padding:'10px 20px'}}>
        <h3 style={{position:'absolute', zIndex:'auto'}}>{name}</h3>
        <img src={imageURL} alt={imageURL} width='100%' height='200px'/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h3>Rs {price}</h3>
           {Existcart.length<1?
            <button style={{width:'100px', height:'30px', backgroundColor:'black',color:'white',cursor:'pointer', marginTop:'15px'}}
            onClick={AddToCart}
            >Add to Cart</button>:
            <div style={{color: 'black', marginTop:'15px'}}>
              <button
              style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
              onClick={()=>handleCount(el.id,-1)}
              disabled={Existcart[0].quantity==1}>-</button>
              <span style={{padding:'6px 7px', backgroundColor:'black',color:'white'}}>{Existcart[0].quantity}</span>
              <button
              style={{width:'35px',height:'30px', backgroundColor:'black',color:'white',cursor:'pointer'}}
              onClick={handleIncrementAndAlert}>+</button>
            </div>
          }
        </div>
    </div>
  )
}

export default ProductCard