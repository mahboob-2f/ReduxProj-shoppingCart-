import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Product({post}) {
    const [selected,setSelected] = useState(false);

    const description = post.description.substr(0,67);
    const {cart} = useSelector((state)=>state)

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
            <button>
            {/*       here to start  */}
              
            </button>
        </div>

    </div>
  )
}


