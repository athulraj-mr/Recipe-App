import React from 'react'
import categoryLogo from '../assets/logos/category.svg'
import areaLogo from '../assets/logos/area.svg'
import heartSolidLogo from '../assets/logos/redHeart.svg'
import heartEmptyLogo from '../assets/logos/whiteHeart.svg'
import { useParams } from 'react-router-dom'
import useRecipe from '../hooks/useRecipe'
import { useFavorites } from '../context/FavoritesContext'

const Details = () => {

    const { id } = useParams()
    const {recipe, loading, error } = useRecipe(id)

    const { addFavorite, removeFavorite, isFavorite } = useFavorites()

    if (loading) return <p>Loading...</p>
    if (error) return <p style={{ color: "red" }}>{error}</p>
    if (!recipe) return null

    const ingredients = []
    for(let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`]
        const measure = recipe[`strMeasure${i}`]

        if(ingredient && ingredient.trim() !== '') {
            ingredients.push(`${ingredient} - ${measure}`)
        }
    }

    const fetchedInstructions = recipe.strInstructions || ''
    const steps = fetchedInstructions.split('\n').map(step => step.trim()).filter(step => step.length >0)
    
    const favorite = isFavorite(recipe.idMeal)
    const handleFavorite = () => {
        if (favorite) {
            removeFavorite(recipe.idMeal)
        } else {
            addFavorite(recipe)
        }
    }

  return (
    <div className='flex justify-center'>
        
        <div className='bg-myGreen-900 h-auto my-12 mx-2 px-2 py-4 rounded-2xl shadow-xl/20 md:px-5 md:py-10 md:w-150 md:shadow-xl/30 lg:w-350'>
            <div className='bg-white border-myGreen-900 h-auto rounded-2xl pb-4 md:pb-10 lg:flex lg:w-full lg:p-5'>
                <div className='relative rounded-2xl mb-2 md:mb-8 lg:mb-0 lg:w-auto lg:h-auto'>
                    <img src={recipe.strMealThumb} alt="food image" className='rounded-t-2xl md:w-full lg:w-180 lg:h-auto lg:rounded-2xl xl:w-100'/>
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
                <div className='h-auto mt-4 lg:w-200 lg:mx-6 lg:pt-8 xl:pt-16'>
                    <div className='mx-4'>
                        <h1 className='text-4xl font-medium md:text-6xl'>{recipe.strMeal}</h1>
                    </div>
                    <div className='flex mx-4 mt-1 gap-1 items-center md:pt-1 lg:mt-2'>
                        <div className='w-5 lg:w-6'>
                            <img src={categoryLogo} alt="category logo" />
                        </div>
                        <div>
                            <h2 className='pt-1 md:text-lg lg:text-xl'>{recipe.strCategory}</h2>
                        </div>
                    </div>
                    <div className='flex mx-5 gap-1 items-center mt-2'>
                        <div className='w-4 md:w-5'>
                            <img src={areaLogo} alt="Area logo" />
                        </div>
                        <div>
                            <h2 className='md:text-lg'>{recipe.strArea}</h2>
                        </div>
                    </div>
                    <div className='mx-2 mt-4 md:mt-8 lg:hidden'>
                        <div className='mb-1'>
                            <div className='mb-3 ml-2 md:mb-8'>
                                <h2 className='text-xl font-medium md:text-2xl lg:text-3xl'>All  Ingredients</h2>
                            </div>
                            <div className='grid grid-cols-1 border border-dark-900 rounded-xl shadow-xl p-3 md:border-2'>
                                { ingredients.map((item, index) => (
                                    <p key={index} className='text-base/7 md:text-2xl/12'>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mx-2 mt-6 md:mt-12 lg:hidden'>
                        <div className='mx-2'>
                            <h2 className='text-xl font-medium md:text-2xl'>How To Prepare</h2>
                        </div>
                        <div className='border border-dark-900 rounded-2xl px-3 py-5 text-base/7 shadow-xl mt-4 md:mt-8 md:px-5 md:pt-8 md:border-2'>
                            {steps.map((step, index) => (
                                <div key={index} className='my-3 md:mb-7'>
                                    <div className='flex justify-center items-center my-2 bg-[#E36A6A] rounded-sm w-17 md:w-20 md:h-9 md:text-lg'>
                                        <h2 className='text-lg'>Step -{index + 1}</h2>
                                    </div>
                                    <h2 className='text-lg/7 md:text-2xl/10'>{step}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block lg:mt-6 lg:rounded-2xl'>
                <div className='mx-2 my-8'>
                    <div className='mb-1 border-2 border-white bg-white rounded-2xl px-4 py-6'>
                        <div className='mb-6 flex justify-center'>
                            <h2 className='text-2xl font-medium'>All  Ingredients</h2>
                        </div>
                        <div className='border-2 border-dark-900 bg-white rounded-2xl grid grid-cols-2 gap-3 py-8'>
                            {ingredients.map((item, index) => (
                                <p key= {index} className='flex justify-center text-2xl/10'>{item}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div className='border-2 border-white bg-white rounded-2xl px-4 pt-6 mx-2'>
                    <div className='flex justify-center'>
                        <h2 className='text-xl font-medium md:text-2xl'>How To Prepare</h2>
                    </div>
                    <div className='bg-white border-2 border-dark-900 rounded-2xl px-4 py-6 my-6'>
                        {steps.map((step, index) => (
                            <div key={index} className='my-3 md:mb-7'>
                                <div className='flex justify-center items-center my-2 bg-[#E36A6A] rounded-sm w-17 md:w-20 md:h-9 md:text-lg lg:rounded-lg lg:h-10 lg:w-22 lg:mb-6'>
                                    <h2 className='text-lg'>Step -{index + 1}</h2>
                                </div>
                                <h2 className='text-lg/7 md:text-2xl/10'>{step}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details