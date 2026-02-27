import React from 'react'
import NavBar from '../components/NavBar'
import { useFavorites } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <NavBar />

      { favorites && favorites.length === 0 ?
        <div className='flex justify-center shadow-2xl items-center rounded-2xl bg-myGreen-900 mx-2 my-6 h-60 md:h-90 lg:h-100'>
          <p className='border border-white rounded-lg px-3 py-2 md:text-xl md:px-8 md:py-3 md:border-2 md:font-medium'>Add Some Favorite Recipes</p>
        </div>
      :
        <div className='w-auto flex flex-col gap-3 mt-8 mb-8 h-auto justify-center bg-myGreen-900 mx-4 shadow-xl/20 rounded-2xl md:rounded-3xl md:grid md:grid-cols-3 lg:grid-cols-4 lg:px-2 lg:py-8'>
          { favorites.map((recipe) => (
            <RecipeCard key={ recipe.idMeal } recipe={ recipe } />
          ))}
        </div>
      }
    </div>
  )
}

export default Favorites