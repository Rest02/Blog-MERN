import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import CategoriaCard from "../components/CategoriaCard";

function CategoriasPage() {
  const { getCategorias, categoria } = useInfood();

  useEffect(() => {
    getCategorias();
  }, []);

  return <div>
    <CategoriaCard categoria = { categoria }/>
  </div>;
}

export default CategoriasPage;
