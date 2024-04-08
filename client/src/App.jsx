import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductsList from './pages/ProductsPage'
import ProductForm from './pages/ProductForm'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<ProductsList/>} ></Route>
      <Route path = "/newProduct" element={<ProductForm/>}></Route>
    </Routes>
  )
}

export default App