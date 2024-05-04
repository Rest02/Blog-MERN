import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";

function ViewProductPage() {
  const params = useParams();
  const { mostrarProductInfNutricional } = useInfood();

  useEffect(() => {
    async function listOneProduct() {
      const response = await mostrarProductInfNutricional(params.id);
      setProductos(response);
    }
    listOneProduct();
  });

  const [producto, setProductos] = useState([]);

  return (
    <div>
      {producto.map((pro) => (
        <div key={pro.idProducto}>
          <h1>{pro.nombreProducto}</h1>
          <h2>{pro.descripcionProducto}</h2>
          <p>{pro.colorProducto}</p>
          <img src={`http://localhost:4000/images/` + pro.imagen} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ViewProductPage;
