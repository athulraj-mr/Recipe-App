import React from 'react'
import { Link } from 'react-router-dom'
import favoritesLogo from '../assets/logos/favorite-icon.svg'
import chefLogo from '../assets/logos/chef-logo.svg'
import { useFavorites } from '../context/FavoritesContext'



const NavBar = () => {
    const {favorites } = useFavorites()

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
                <div className='relative flex justify-center w-auto items-center gap-2 rounded-lg pr-2 pt-3 md:pr-0 lg:pr-0'>
                    <div>
                        <div className='flex justify-center w-auto'>
                            {favorites && favorites.length !== 0 ? 
                                <span className='absolute left-8 top-6 text-base text-white font-bold md:left-9 lg:text-xl'>+{favorites.length}</span>
                            : '' }
                        </div>
                        <div>
                            <img src={favoritesLogo} alt="favorite logo" className='w-8 md:w-9 lg:w-9'/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
)
}

export default NavBar