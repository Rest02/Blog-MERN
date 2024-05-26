import React from "react";
import { useNavigate } from 'react-router-dom'
import { useInfood } from '../Context/Context'

function CategoriaCard({ categoria }) {

  const navigate = useNavigate()

  const {deleteCategoria} = useInfood()

  return (
    <div>
      <h1>Categorias</h1>
      {categoria.map((cat) => (
        <div key={cat.idCategoria}>
          <h1>{cat.nombreCategoria}</h1>
          <p>{cat.descripcionCategoria}</p>
          <img src={`http://localhost:4000/images/` + cat.imagen} alt="" />
          <button onClick={()=>(navigate(`/categoriaForm/${cat.idCategoria}`))}>Editar Categoria</button>
          <button onClick={()=>(deleteCategoria(cat.idCategoria) )}>Eliminar Categoria</button>
        </div>
      ))}
    </div>
  );
}

export default CategoriaCard;
