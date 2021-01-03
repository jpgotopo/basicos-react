import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregaProducto}) => (
    <div className="carrito">
       <h2>Tu Carrito de Compras</h2>

        {/* {carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
            />
        ))} */}

        {carrito.length === 0
        
        ? <p> No hay elementos en el Carrito</p>

        : carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregaProducto}
            />
        ))
        
        }

    </div>

);
 
export default Carrito;