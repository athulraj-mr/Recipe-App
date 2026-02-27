import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import RecipeDetails from './pages/RecipeDetails'
import Favorites from './pages/Favorites'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<RecipeDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App