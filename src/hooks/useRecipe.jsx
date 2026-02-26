import React, { useEffect, useState } from 'react'
import { getRecipeById } from '../services/api'

const useRecipe = (id) => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!id) return
        
        const fetchedRecipe = async() => {
            try {
                setLoading(true)
                setError(null)
                const data = await getRecipeById(id)
                setRecipe(data.meals ? data.meals[0] : null)
            } catch (err) {
                setError('Failed To Fetch Recipe Details')
            } finally {
                setLoading(false)
            }
        }
        fetchedRecipe()
    }, [id])

  return { recipe, loading, error}
}

export default useRecipe