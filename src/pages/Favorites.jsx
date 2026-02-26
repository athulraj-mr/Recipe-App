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

      { favorites.map((recipe) => (

        <RecipeDetailCard key={ recipe.idMeal } recipe={ recipe } />
      ))}
    </div>
  )
}

export default Favorites