import React from 'react'
import logo from "../assets/logo.png"
import useInternet from '../hooks/useIneternet'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {

    const online = useInternet();

    const cartItems = useSelector(store => store.cart.items)

    return (
        <div className=''>
            <div className='flex justify-around items-center'>
                <div>
                    <a href='/'>
                        <img className='w-3/4' alt='logo' src={logo} />
                    </a>
                </div>

                <div>
                    <ul className='flex gap-5'>

                        <Link to='/'>

                            <li>HOME</li>
                        </Link>

                        <Link to='/about'>
                            <li>About Us</li>
                        </Link>

                        <Link to='/cart'>
                            <li>Cart <span className='bg-black text-white px-1 rounded'>{cartItems.length}</span></li>

                        </Link>


                    </ul>

                </div>

                <div>
                    {
                        online ? <span className='bg-green-500'>You are Online</span> : <span className='bg-red-500'>You are offline</span>
                    }
                </div>

            </div>
        </div>
    )
}

export default Header
