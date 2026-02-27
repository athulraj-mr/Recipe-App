import React from 'react'
import { Link } from 'react-router-dom'
import favoritesLogo from '../assets/logos/favorite-icon.svg'
import chefLogo from '../assets/logos/chef-logo.svg'



const NavBar = () => {
  return (
    <div className='bg-myGreen-900 sticky top-0 z-10 flex items-center justify-between shadow-xl/20 h-22 md:h-20 md:gap-10 lg:h-24'>
        <Link to='/'>
            <div className='flex items-center pl-5 gap-3 w-4/5 md:pl-12 lg:pl-16'>
                <img src={chefLogo} alt="logo" className='w-10 md:w-12'/>
                <h1 className='text-2xl font-mono pt-4 md:pt-3 md:text-3xl'>Recipes..</h1>
            </div>
        </Link>
        <div className='w-1/5 flex items-center justify-center lg:pl-22'>
            <Link to= '/favorites'>
                <div className='flex pr-2 pt-3 md:pr-0 lg:pr-0'>
                    <img src={favoritesLogo} alt="" className='w-6 lg:w-8'/>
                </div>
            </Link>
        </div>
    </div>
)
}

export default NavBar