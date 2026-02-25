import { useState } from "react";
import { searchRecipes } from "../services/api";

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchedRecipe = async(searchValue) => {
        if(!searchValue.trim()) return

        try {
            setLoading(true)
            setError(null)
            const data = await searchRecipes(searchValue)
            const currentData = data.meals
            setRecipes(currentData || [])
        } catch (err) {
            setError('failed to get recipe details')
        } finally {
            setLoading(false)
        }
    }
    return { recipes, loading, error, fetchedRecipe }
}