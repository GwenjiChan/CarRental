import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Models from '../pages/Models'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/models' element={<Models />} />
    </Routes>
  )
}

export default Router