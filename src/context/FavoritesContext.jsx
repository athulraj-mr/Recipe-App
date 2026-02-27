import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites')
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  })

  useEffect(() => {

    localStorage.setItem("favorites", JSON.stringify(favorites))

  }, [favorites])

  const removeFavorite =(id) => {
    setFavorites(favorites.filter((item) => item.idMeal !== id))
  };

  const addFavorite =(recipe ) => {

    const alreadyExists = favorites.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (!alreadyExists) {
      setFavorites([...favorites, recipe]);
    }
  }


  const isFavorite =(id) => {
    return favorites.some((item) => item.idMeal === id)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)