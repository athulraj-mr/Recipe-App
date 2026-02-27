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
        <div className='w-auto flex mt-8 h-40 justify-center items-center bg-[url(src/assets/img/bannerfood.jpg)] bg-center bg-cover mx-4 shadow-xl/20 rounded-2xl md:h-70 lg:h-110 lg:my-12'>
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
        {loading && 
            <div className='flex justify-center items-center bg-myGreen-900 rounded-2xl w-auto h-120 gap-3 mx-4 my-12'>
                <svg aria-hidden="true" className="w-10 h-10 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="white"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className='text-2xl text-white'>Loading...</span>
            </div>
        }
        {error && 
            <div className='bg-dark-900 flex justify-center items-center w-auto h-120 rounded-2xl my-12 mx-4'>
                <p className='text-2xl border-2 border-red-500 rounded-xl px-3 py-3'>{error}</p>
            </div>
        }
        {!loading && !error && recipes.length !== 0 ?
        <div>
            <div className='flex justify-center mt-8 lg:mb-16 lg:mt-18'>
                <h1 className='text-xl font-medium text md:text-2xl lg:text-3xl'>All Recipes</h1>
            </div>
            <div className='w-auto flex flex-col gap-3 my-8 py-4 h-auto justify-center bg-myGreen-900 mx-4 shadow-xl/20 rounded-2xl md:rounded-3xl md:grid md:grid-cols-3 lg:grid-cols-4 lg:px-2 lg:py-8'>
                {recipes.map((recipe) => (
                    <RecipeDetailCard key = {recipe.idMeal} recipe = {recipe}/>
                ))}
            </div>
        </div>
        : '' }
    </div>
  )
}

export default SearchBar
