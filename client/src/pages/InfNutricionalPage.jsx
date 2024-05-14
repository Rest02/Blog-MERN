import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";

function InfNutricionalPage() {
  const { creandoInformacionNutricional, getOneInfNutricional, infNutricional } = useInfood();

  const params = useParams();
  console.log(params.id);

  const [informacionNutricional, setinformacionNutricional] = useState([])

  useEffect(() => {
    async function loadProducto(){
      if (params.id) {
        await getOneInfNutricional(params.id)
        console.log(infNutricional)
      }
    }
    loadProducto()
  }, []);

  useEffect(()=>{
    if(informacionNutricional && infNutricional > 0){
      setinformacionNutricional({
        energia: infNutricional.energia,
        proteinas: infNutricional.proteinas,
        grasasTotales: infNutricional.proteinas,
        carbohidratos: infNutricional.carbohidratos,
        azucaresTotales: infNutricional.carbohidratos,
        sodio: infNutricional.sodio
      })
    }

  })

  return (
    <div>
      <Formik
        initialValues={{
          informacionNutricional
        }}
        onSubmit={async (values) => {
          if(params.id){

          }else{
            creandoInformacionNutricional(params.id, values);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Energia</label>
            <input type="number" name="energia" onChange={handleChange} />

            <label>Proteinas</label>
            <input type="number" name="proteinas" onChange={handleChange} />

            <label>Grasas Totales</label>
            <input type="number" name="grasasTotales" onChange={handleChange} />

            <label>Carbohidratos</label>
            <input type="number" name="carbohidratos" onChange={handleChange} />

            <label>Azucares Totales</label>
            <input
              type="number"
              name="azucaresTotales"
              onChange={handleChange}
            />

            <label>Sodio</label>
            <input type="number" name="sodio" onChange={handleChange} />

            {/* Para que funcione es importante poner el id del producto , aún no lo he echo */}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InfNutricionalPage;
