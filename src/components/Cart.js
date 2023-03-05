import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCards from './CartCards'
import { clearCart } from '../utils/cartSlice'

function Cart() {

  const cartItem = useSelector(store => store.cart.items)


  const dispatch = useDispatch()

  const clearTheCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='m-5'>
      <div className='flex items-center gap-5 justify-between m-5'>
        <h1 className='font-bold text-4xl'>Your Cart</h1>

        <button onClick={() => clearTheCart()} className="bg-amber-400 text-red-800 px-2" >Clear Cart</button>

      </div>

      <div className='flex flex-wrap justify-center'>
        {
          cartItem.map((eachItem, index) =>
            <CartCards {...eachItem} key={index} />
          )
        }
      </div>



    </div>
  )
}

export default Cart