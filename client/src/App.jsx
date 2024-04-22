import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsPage";
import ProductForm from "./pages/ProductForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Nosotros from "./pages/Nosotros";
import EditEmpresa from './pages/EditEmpresa'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ProductsList />}></Route>
        <Route path="/newProduct" element={<ProductForm />}></Route>
        <Route path="/editProduct/:id" element={<ProductForm/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/editEmpresa/:id" element={<EditEmpresa/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
