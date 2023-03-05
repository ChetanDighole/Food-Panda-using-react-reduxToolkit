import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_URL } from '../utils/config'
import RestaurantMenu from './RestaurantMenu'
import Shimmer from './Shimmer'

function Restaurant() {
    const { id } = useParams()

    const [restaurantDetail, setRestaurantDetail] = useState()

    useEffect(() => {

        const getrestaurantInfo = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=" + id)
            const json = await data.json()
            console.log(json);
            setRestaurantDetail(json.data)
        }

        getrestaurantInfo()

    }, [id])


    return (!restaurantDetail) ? <Shimmer /> : (
        <div className=''>

            <div className='flex flex-col items-center '>
                {/* up */}
                <div className='flex justify-center gap-28 bg-slate-200 p-4 w-[100%]'>
                    <div className='max-w-[300px]'>

                        <img alt='img' src={IMG_URL + restaurantDetail?.cloudinaryImageId} className="w-[100%] rounded" />
                    </div>
                    <div className='max-w-[500px]'>
                        <h1 className='font-bold text-4xl'>{restaurantDetail.name}</h1>
                        <h2 className='font-semibold text-lg'>Cuisines : {restaurantDetail.cuisines?.join(" | ")}</h2>
                        <h2>Address: {restaurantDetail?.labels[1]?.message}</h2>
                        <h4 className=''>{restaurantDetail.avgRating}  &#9733;</h4>
                    </div>

                </div>
                {/* down */}
                <div className='w-[1000px] flex flex-col items-center '>
                    <h1 className='font-medium text-gray-800 text-3xl'>Menu</h1>
                    <div className="">

                        {
                            Object.values(restaurantDetail.menu.items).map((item) =>

                                <RestaurantMenu item={item} key={item.id} />
                            )
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Restaurant
