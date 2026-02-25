import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<RecipeDetail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App

//