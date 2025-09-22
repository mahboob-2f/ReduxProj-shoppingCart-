import React, { useState } from 'react'

export default function Product({post}) {
    const [selected,setSelected] = useState(false);

    const description = post.description.substr(0,67);

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
              {  !selected ? <p>Add to cart</p> : <p>Remove item</p>}
            </button>
        </div>

    </div>
  )
}


