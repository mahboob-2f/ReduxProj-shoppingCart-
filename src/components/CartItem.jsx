import React from 'react'
import { MdDelete } from "react-icons/md";

function CartItem({ item }) {
    return (
        <div>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div>
                <div>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>{item.price}</p>
                    <button>
                        <MdDelete />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default CartItem