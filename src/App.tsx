import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Customers from './pages/customers/Customers'
import UsuariosTable from "./pages/customers/UsuariosTable"
import CategoriasTable from './pages/customers/CategoriasTable'
import LugarTable from "./pages/customers/LugarTable"
import InscripcionTable from "./pages/customers/InscripcionTable"

// Importar bootstrap para usar en las tablas
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  
  return (
    <>
    <Header />
    <main>
      <aside>
        <MenuLateral />
      </aside>

      <section id="contenido">
        <Routes>
          <Route path="/Categoria" element={<CategoriasTable/>} />
          <Route path="/Inscripcion" element={<InscripcionTable/>} />
          <Route path="/Eventos" element={<Customers />} />
          <Route path="/Lugar" element={<LugarTable />} />  
          <Route path="/Usuario" element={<UsuariosTable />} />    
        </Routes>
      </section>
    </main>

    </>
  )
}

export default App
