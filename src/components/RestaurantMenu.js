import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice'
import { IMG_URL } from '../utils/config'

function RestaurantMenu(props) {
  const { name, price, cloudinaryImageId, description, isVeg } = props.item

  const dispatch = useDispatch()

  const addItemTocart = () => {
      dispatch(addItems(props.item))
  }


  return (
    <div className='flex justify-between gap-3 border-2 rounded items-center m-2 p-2 w-[600px]'>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <h1 className='font-bold'>{name}</h1>
          <div>
            {
              (isVeg)? <div className='text-xs font-semibold text-green-400 px-0.5 border-2 border-green-400'>veg</div> : <div className='text-xs font-semibold text-red-400 px-0.5 border-2 border-red-400'>non-veg</div>
            }
          </div>
        </div>
        <p className='text-sm'>{description}</p>
        <h1>{price / 100} &#8377;</h1>
        <button className='bg-amber-200 w-10'
         onClick={()=>addItemTocart(props.item)} 
          >Add</button>
      </div>
      <div>
        <img alt='img' src={IMG_URL + cloudinaryImageId} className="max-w-[100px]" />
      </div>

    </div>
  )
}

export default RestaurantMenu
