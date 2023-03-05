
import React from 'react'
import { IMG_URL } from '../utils/config'

function CartCards({cloudinaryImageId , price , name }) {
    return (
        <div>

            <div className='max-w-[250px] rounded m-3 p-3 border-[1px] hover:shadow-[0px_0px_0px_1px_#cbd5e0]'>

                <div className='w-100'>
                    <img alt='img' src={IMG_URL + cloudinaryImageId} />
                </div>
                <h2 className='font-semibold text-lg '>{name}</h2>
                <h2>{price / 100} &#8377;</h2>

            </div>

        </div>
    )
}

export default CartCards
