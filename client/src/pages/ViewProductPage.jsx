import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import CardComponent1 from '../components/CardComponent1'

function ViewProductPage() {
  const params = useParams();
  const { getOneProductoIndv, producto } = useInfood();


  useEffect(() => {
    async function listOneProduct() {
      getOneProductoIndv(params.id);
    }
    listOneProduct();
  }, []);

  return (
    <CardComponent1 producto = {producto}/>
  );
}

export default ViewProductPage;
