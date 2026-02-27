import React from 'react'
import NavBar from '../components/NavBar'
import { useFavorites } from '../context/FavoritesContext';
import RecipeDetailCard from '../components/RecipeDetailCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <NavBar />

      { favorites.length === 0 && (
        <div className='flex justify-center shadow-2xl items-center rounded-2xl bg-myGreen-900 mx-2 my-6 h-60'>
          <p>No Favorite Added</p>
        </div>
      )}

      <div className='w-auto flex flex-col gap-3 mt-8 mb-8 h-auto justify-center bg-myGreen-900 mx-4 shadow-xl/20 rounded-2xl md:rounded-3xl md:grid md:grid-cols-3 lg:grid-cols-4 lg:px-2 lg:py-8'>
        { favorites.map((recipe) => (
          <RecipeDetailCard key={ recipe.idMeal } recipe={ recipe } />
        ))}
      </div>
    </div>
  )
}

export default Favorites