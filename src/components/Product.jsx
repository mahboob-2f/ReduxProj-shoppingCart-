import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove,add } from '../redux/slices/Cartslice';
import { toast } from 'react-toastify';

export default function Product({post}) {
    const [selected,setSelected] = useState(false);

    const description = post.description.substr(0,67);
    const {cart} = useSelector((state)=>state)
    
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(add(post));
        toast.success("item removed",{
            position:"top-center",
            autoClose:1000
        });
    }

    const removeFromCart = ()=>{
        dispatch(remove(post.id));
        toast.error("item removed",{
            position:"top-center",
            autoClose:1000
        });
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


