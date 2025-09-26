import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Cartslice';
import { toast } from 'react-toastify';

function CartItem({ item }) {

    const dispatch = useDispatch();

    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("item removed",{
                    position:"top-center",
                    autoClose:1000
                });
    }
    console.log(item);
    
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
                    <button onClick={removeFromCart}>
                        <MdDelete />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default CartItem