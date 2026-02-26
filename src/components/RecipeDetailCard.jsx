import React from 'react'
import categoryLogo from '../assets/logos/category.svg'
import heartSolidLogo from '../assets/logos/redHeart.svg'
import heartEmptyLogo from '../assets/logos/whiteHeart.svg'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext';

const RecipeDetailCard = ({recipe}) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const favorite = isFavorite(recipe.idMeal);

    const handleFavorite = () => {
    if (favorite) {
        removeFavorite(recipe.idMeal);
    } else {
        addFavorite(recipe);
    }
};
  return (
    <div className='bg-white m-2 rounded-2xl shadow-xl/20 md:rounded-2xl md:m-4'>
        <button onClick={handleFavorite}>
        {favorite ? 
            <div className='flex w-10'>
                <img src={heartSolidLogo} alt="heartLogo"  className='w-8'/>
            </div>
        :  
        <img src={heartEmptyLogo} alt="heart logo"  className='w-8'/>
        }
        </button>
        <div className='rounded-2xl m-1 mb-0 md:rounded-2xl lg:mx-2 lg:mt-2'>
            <img src={recipe.strMealThumb} alt="food image" className='rounded-t-2xl'/>
        </div>
        <div className='pl-3 pt-2'>
            <h1 className='text-2xl font-medium'>{recipe.strMeal}</h1>
        </div>
        <div className='flex pl-3 gap-1 items-center'>
            <div>
                <img src={categoryLogo} alt="category logo" className='w-4'/>
            </div>
            <div>
                <h2 className='pt-1'>{recipe.strCategory}</h2>
            </div>
        </div>
        <div className='pt-3 mx-3 my-3'>
            <Link to={`/details/${recipe.idMeal}`}>
                <button className='bg-[#E36A6A] border-[#B35656] font-medium rounded-lg w-full h-10 lg:h-13 lg:text-lg'>Details</button>
            </Link>
        </div>
    </div>
  )
}

export default RecipeDetailCard