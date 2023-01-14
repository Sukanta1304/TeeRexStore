import React from 'react'

function CartProductCard({el,handleDelete}) {
    const {id,imageURL,name,price,quantity}= el;

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
            <select disabled>
                <option>{quantity}</option>
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