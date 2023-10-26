import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto";
import NotFound from "./NotFound";
import User from "./User";
import ProductosList from "./ProductosList";
import ProductosDetail from "./ProductoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Inicio} />
        <Route path="/contacto" Component={Contacto} />

        <Route path="/user/:id" Component={User} />

        {/* <Route path="/productos" Component={ProductosList} />
        <Route path="/productos/:id" Component={ProductosDetail} /> */}

        <Route path="/productos">
          <Route index element={<ProductosList />} />
          <Route path=":id" element={<ProductosDetail />} />
        </Route>

        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
