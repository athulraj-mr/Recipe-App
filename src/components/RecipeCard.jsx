import React from 'react'
import categoryLogo from '../assets/logos/category.svg'
import heartSolidLogo from '../assets/logos/redHeart.svg'
import heartEmptyLogo from '../assets/logos/whiteHeart.svg'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext';

const RecipeCard = ({recipe}) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites()

    const favorite = isFavorite(recipe.idMeal)

    const handleFavorite = () => {
        if (favorite) {
            removeFavorite(recipe.idMeal)
        } else {
            addFavorite(recipe)
        }
    };
  return (
    <div className='bg-white m-2 rounded-2xl shadow-xl/20 md:rounded-2xl md:m-4'>
        <div className='relative rounded-2xl m-1 mb-0 md:rounded-2xl lg:mx-2 lg:mt-2'>
            <img src={recipe.strMealThumb} alt="food image" className='rounded-t-2xl'/>
            <button onClick={handleFavorite} className='absolute top-4 right-4'>
            {favorite ? 
                <div className='flex bg-white w-11 h-11 rounded-lg justify-center items-center px-1'>
                    <img src={heartSolidLogo} alt="heartLogo"  className='w-6'/>
                </div>
            :  
                <div className='flex bg-[#393953] w-11 h-11 rounded-lg justify-center items-center px-1'>
                    <img src={heartEmptyLogo} alt="heartLogo"  className='w-6'/>
                </div>
            }
            </button>
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

export default RecipeCard