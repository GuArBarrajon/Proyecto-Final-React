import { useState, useEffect } from 'react'
import './App.css'
import Home from './layouts/Home'
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Productos from './layouts/Productos'
import Carrito from './components/Carrito'
import Servicios from './layouts/servicios'
import Info from './layouts/infoAyuda'
import Donde from './layouts/dondeEstamos';
import Contacto from './layouts/Contacto'
import PoliticasCambio from './layouts/politasCambio'
import ProductoDetalle from './components/productoDetalle'
import Login from './components/Login'
import Admin from './components/Admin'

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [adminLogueado, setAdminLogueado] = useState(false);

function manejarAdmin(){
  setAdminLogueado(!adminLogueado)
}
function manejarUser(){
  setUsuarioLogueado(!usuarioLogueado)
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header productosCarrito={productosCarrito} user={usuarioLogueado} admin={adminLogueado}/>
      </div>
      <div>
        <Nav />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login user={usuarioLogueado} admin={adminLogueado} setLogueadoAdmin={manejarAdmin} setLogueadoUser={manejarUser}/>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={adminLogueado || usuarioLogueado ?  <Carrito /> : <Navigate to={"/login"} replace/>}/>      
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/infoAyuda" element={<Info />} />
          <Route path="/dondeEstamos" element={<Donde />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/politicasCambio" element={<PoliticasCambio/>}/>
          <Route path="/productos/:id" element={<ProductoDetalle user={usuarioLogueado} admin={adminLogueado}/>} />
          <Route path='/admin' element={adminLogueado ? <Admin/> : <Navigate to={"/login"} replace/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
