import React from 'react'
import { IMG_URL } from '../utils/config'

function RestaurantCards({name , cuisines , costForTwo , cloudinaryImageId }) {
    
    return (
        <div className='max-w-[250px] rounded m-3 p-3 border-[1px] hover:shadow-[0px_0px_0px_1px_#cbd5e0]'>
    
            <div className='w-100'>
                <img alt='img' src={IMG_URL + cloudinaryImageId} />
            </div>
            <h2 className='font-semibold text-lg '>{name}</h2>
            <h2>{cuisines.join(" | ")} |</h2>
            <h2>{costForTwo/100} &#8377;</h2>
    
        </div>
      )
}

export default RestaurantCards

