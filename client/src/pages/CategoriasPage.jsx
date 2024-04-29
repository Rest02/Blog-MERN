import React, { useEffect } from 'react'
import { useInfood } from '../Context/Context'

function CategoriasPage() {

  const {getCategorias, categoria} = useInfood()

  useEffect(()=>{
    getCategorias()
  },[])

  return (
    <div>
      <h1>Categorias</h1>
      {categoria.map((cat)=>(
        <div key={cat.idCategoria}>
          <h1>{cat.nombreCategoria}</h1>
          <p>{cat.descripcionCategoria}</p>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  )
}

export default CategoriasPage