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

import Admin from './components/Admin'
import Login from './components/Login'
import Registrarse from './components/Registro'
import  FormularioProducto  from './components/FormularioProducto'
import FormularioEdicion from './components/FormularioEdicion'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { verificacionLog } = useAuthContext();
  // Verificar si el usuario está autenticado al cargar la aplicación
  useEffect(() => {
    verificacionLog();
  }, []);


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
        <Header  />
      </div>
      <div>
        <Nav />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/login' element={<Login/>} />'
          <Route path='/registrarse' element={<Registrarse/>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />}/>      
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/infoAyuda" element={<Info />} />
          <Route path="/dondeEstamos" element={<Donde />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/politicasCambio" element={<PoliticasCambio/>}/>
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/agregarProducto' element={<FormularioProducto/>}/>
          <Route path="/admin/editarProducto/:id" element={<FormularioEdicion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
