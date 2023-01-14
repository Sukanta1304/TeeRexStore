import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {TbFilter} from 'react-icons/tb'
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import Style from '../styles/product.module.css';


function Product() {
    const {product,setProduct}= useContext(CartContext)
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [color, setColor] = useState("")

    useEffect(() => {
        fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
        .then((res)=> res.json())
        .then((res)=>{
            console.log(res);
            setData(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const handleSearch=()=>{
        console.log(query);
        const searchData = data.filter((el)=>
        el.name=== query || el.color=== query ||
        el.type==query
        )

        console.log(searchData);
        setData(searchData);
        setQuery("")
    }
const handleColorChange=(e)=>{
    setColor(e.target.value);
    // const updatedData=data.filter((item)=> item.color===color);
    // setData(updatedData)
}

  return (
    <div>
        <div className={Style.productserachdiv}>
        <input type="text" placeholder='Search for products...'
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button className={Style.serachbutton}
        onClick={handleSearch}><AiOutlineSearch/></button>
        <button className={Style.filterBtn}><TbFilter/></button>
        </div>
       <div className={Style.productHomediv}>
        <div className={Style.filterDiv}>
            <div>
                <h3>Colour</h3>
                <input type="checkbox"  name='color' value='Red' onChange={handleColorChange}/> <span>Red</span>
                <br />
                <input type="checkbox" name='color'  value='Blue' onChange={handleColorChange}/> <span>Blue</span>
                <br />
                <input type="checkbox"  name='color' value='Green' onChange={handleColorChange}/> <span>Green</span>
            </div>
            <div>
                <h3>Gender</h3>
                <input type="checkbox" /> <span>Men</span>
                <br />
                <input type="checkbox" /> <span>Women</span>
            </div>
            <div>
                <h3>Price</h3>
                <input type="checkbox" /> <span>0 - Rs250</span>
                <br />
                <input type="checkbox" /> <span>Rs251 - Rs400</span>
                <br />
                <input type="checkbox" /> <span>Rs450</span>
            </div>
            <div>
                <h3>Type</h3>
                <input type="checkbox" /> <span>Polo</span>
                <br />
                <input type="checkbox" /> <span>Hoodie</span>
                <br />
                <input type="checkbox" /> <span>Basic</span>
            </div>

        </div>
        <div className={Style.mainProductdiv}>
            {data.length>0? data.map((el)=>
            <ProductCard key={el.id} el={el}/>
            ): <h3>No Matching Items Found</h3>}
        </div>
       </div>

    </div>
  )
}

export default Product