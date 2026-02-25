import React, { useEffect, useState } from 'react'
import { useRecipes } from '../hooks/useRecipes';
import RecipeDetailCard from './RecipeDetailCard';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const { recipes, loading, error, fetchedRecipe } = useRecipes()

    useEffect(() => {
        fetchedRecipe('chicken')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchedRecipe(searchValue)
    };

  return (
    <div className='w-full'>
        <div className='w-auto flex mt-8 h-40 justify-center items-center bg-[url(/home/vonnue/Desktop/Recipe_App/src/assets/img/bannerfood.jpg)] bg-center bg-cover mx-4 shadow-xl/20 rounded-2xl md:h-70 lg:h-110 lg:my-12'>
            <form onSubmit={handleSubmit} className='flex justify-center items-center py-10 h-auto gap-2'>
                <div>
                    <input type="text"
                        placeholder='Search Dishes..' 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} 
                    className='ring-1 ring-dark-700 rounded-xl bg-white text-sm h-9 w-60 pl-3 border border-dark-900 md:w-70 lg:w-120 lg:h-14 lg:rounded-2xl lg:text-base'/>
                </div>
                <div>
                    <button type='submit' className='bg-[#E36A6A] border-[#B35656] border-2 hover:bg-[#e49b9b] ring-1 ring-dark-500 rounded-lg h-8 text-xs px-2 w-18 lg:h-13 lg:text-lg lg:rounded-xl lg:w-24'>Search</button>
                </div>
            </form>
        </div>
        <div className='flex justify-center mt-8'>
            <h1 className='text-xl font-medium text md:text-2xl lg:text-3xl'>All Recipes</h1>
        </div>
        <div className='w-auto flex flex-col gap-3 mt-8 mb-8 h-auto justify-center bg-dark-900 mx-4 shadow-xl/20 rounded-2xl md:rounded-3xl md:grid md:grid-cols-3 lg:grid-cols-4 lg:px-2 lg:py-8'>
            {recipes.map((recipe) => (
                <RecipeDetailCard key = {recipe.idMeal} recipe = {recipe}/>
            ))}
        </div>
    </div>
  )
}

export default SearchBar