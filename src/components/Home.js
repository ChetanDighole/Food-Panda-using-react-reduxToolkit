import React, { useEffect, useState } from 'react'
import { ALL_RESTAURANT } from '../utils/config'
import RestaurantCards from './RestaurantCards'
import Shimmer from './Shimmer'
import searchResult from '../utils/searchResult'
import { Link } from 'react-router-dom'

function Home() {


  useEffect(() => {
    fetchAllRestaurant()
  
    
  }, [])

  const [inputText, setInputText] = useState("")

  const [bigRestaurantData, setBigRestaurantData] = useState([])
  const [filterData , setFilterData] = useState([])
  

  async function fetchAllRestaurant() {
    const data = await fetch(ALL_RESTAURANT)

    const json = await data.json()

    setBigRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
    setFilterData(json?.data?.cards[2]?.data?.data?.cards)

  }

  return (bigRestaurantData.length === 0)? <Shimmer /> : (
    <div>
      <div className='flex justify-center items-center '>
        <input type="text" placeholder="search" className='border-2 border-gray-400 rounded p-1' 
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        />
        <button className='bg-blue-600 text-white p-1 m-5 rounded hover:bg-blue-800'
        onClick={()=>{
          const filter = searchResult(inputText , bigRestaurantData)
          setFilterData(filter)
        }}
        >Search</button>
      </div>



      <div className='flex flex-wrap gap-5 justify-center'> 
        {
          filterData.map( 
            (eachRestaurant) => 
              <Link to={'/restaurant/'+ eachRestaurant.data.id} key={eachRestaurant.data.id}>
                <RestaurantCards {...eachRestaurant.data} key={eachRestaurant.data.id} />
              </Link>
           )
        }

      </div>

    </div>
    
  )
}

export default Home
