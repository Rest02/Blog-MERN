import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductsList from './pages/ProductsPage'
import ProductForm from './pages/ProductForm'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<ProductsList/>} ></Route>
      <Route path = "/newProduct" element={<ProductForm/>}></Route>
      <Route path = "*" element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}

export default App