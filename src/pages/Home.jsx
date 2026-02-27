import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'

const Home = () => {

  return (
    <div>
      <div>
        <NavBar />
        <SearchBar />
      </div>
    </div>
  )
}

export default Home