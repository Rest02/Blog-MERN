import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductsList from './pages/ProductsList'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<ProductsList/>} ></Route>
    </Routes>
  )
}

export default App