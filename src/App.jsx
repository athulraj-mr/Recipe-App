import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import Details from './components/Details'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<RecipeDetail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App

//