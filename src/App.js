import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
function App() {

  //Crear Listado de Productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa React Js', precio: 50 },
    { id: 2, nombre: 'Camisa Συε Js', precio: 40 },
    { id: 3, nombre: 'Camisa Νοδε Js', precio: 30 },
    { id: 4, nombre: 'Camisa Ανγυλαρ Js', precio: 30 },
  ]);

  //State para un carrito de compras

  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecga
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      
      />
      <h1>Lista de Productos</h1>
        {productos.map((producto, index) =>(
          <Producto 
            key={index}
            producto = {producto}
            productos={productos}
            carrito = {carrito}
            agregarProducto={agregarProducto}
          />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      
      />
    </Fragment>
  );
}

export default App;
