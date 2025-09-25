import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/slices/Cartslice';
import toast from 'react-hot-toast';

export default function Product({post}) {
    const [selected,setSelected] = useState(false);

    const description = post.description.substr(0,67);
    const {cart} = useSelector((state)=>state)
    
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(add(post));
        toast.success("item added");
    }

    const removeFromCart = ()=>{
        dispatch(remove(post.id));
        toast.success("item removed")
    }
  return (
    <div>
        <div>
            <p>{post.title}</p>
            <p>{description+"...."}</p>
        </div>
        <div className='h-[198px] w-[138px]'>
            <img src={post.image} alt="" loading='lazy'/>
        </div>
        <div>
            <p>${post.price}</p>
            <div>
            
            {
                cart.some((p)=> p.id === post.id) ?
                ( <button onClick={removeFromCart}>Remove Item</button>): 
                (<button onClick={addToCart}>Add Item</button>) 
            }
              
            </div>
        </div>

    </div>
  )
}


