import axios from "axios";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export const searchRecipes = async(searchValue) => {
    const response = await axios.get(`${BASE_URL}/search.php?s=${searchValue}`)
    return response.data
}

export const getRecipeById = async(id) => {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`)
    return response.data
}