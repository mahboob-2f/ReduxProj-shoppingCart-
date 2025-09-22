import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price ,0));
  },[cart]);

  return (
    <div>
      {
        cart.length > 0 ? (
          <div>
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} />
                })
              }
            </div>
            <div>
              <p>your Cart</p>
              <p>Summary</p>
              <p>total items: {cart.length}</p>
              <div>
                <p>total amount : ${totalAmount}</p>
                <button>Check Out</button>
              </div>
            </div>
          </div>


        ) : (
          <div>
            <p>Cart empty</p>
            <NavLink to='/'>
              <button>
                Shop Now
              </button></NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart