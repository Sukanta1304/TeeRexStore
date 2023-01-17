import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartProductCard({el,handleDelete}) {
    const {product,setProduct}= useContext(CartContext);
    const {id,imageURL,name,price,quantity,availableqty}= el;

    const handleQtyChange=(e)=>{
        const payload= e.target.value;
        let updatedqty = product.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity:Number(payload)
            };
          } else {
            return item;
          }
        });
        setProduct(updatedqty);
    }

  return (
    <div style={{display:'flex',gap:'1rem'}}>
        <div>
          <img src={imageURL} alt={imageURL} width='150px' height='150px'/>
        </div>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h3 style={{margin:'0'}}>{name}</h3>
            <h4 style={{margin:'0'}}>Rs {price}</h4>
        </div>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <select onChange={handleQtyChange} defaultValue={quantity}>
                {new Array(availableqty).fill(0).map((qty,i)=>
                <option value={i+1} key={i}>{i+1}</option>
                )}
            </select>
        </div>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <button style={{width:'50px', height:'30px', borderRadius:'5px', backgroundColor:'white', border:'0.5px solid grey', cursor:'pointer'}}
            onClick={()=>handleDelete(id)}>
             Delete
            </button>
        </div>
    </div>
  )
}

export default CartProductCard