import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsPage";
import ProductForm from "./pages/ProductForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Nosotros from "./pages/Nosotros";
import EditEmpresa from "./pages/EditEmpresa";
import { InfoodContextProvider } from "./Context/Context";
import CategoriasPage from "./pages/CategoriasPage";
import ViewProductPage from "./pages/ViewProductPage";
import InfNutricionalPage from './pages/InfNutricionalPage'

function App() {
  return (
    <InfoodContextProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ProductsList />}></Route>
        <Route path="/newProduct" element={<ProductForm />}></Route>
        <Route path="/editProduct/:id" element={<ProductForm />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/editEmpresa" element={<EditEmpresa />}></Route>
        <Route path="/categorias" element={<CategoriasPage />}></Route>
        <Route path="/viewProduct/:id" element={<ViewProductPage />}></Route>
        <Route path="/infNutricional/:id" element={<InfNutricionalPage />}></Route>
        <Route path="/EditarinfNutricional/:id" element={<InfNutricionalPage />}></Route>

        
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </InfoodContextProvider>
  );
}

export default App;
