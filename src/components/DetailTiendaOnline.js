import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckCircle } from "react-icons/bs";

const DetailTiendaOnline = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>Título Principal</h1>
          <p>Este es un párrafo que está debajo del título principal.</p>
          <ul>
            <li><BsCheckCircle /> Opción 1</li>
            <li><BsCheckCircle /> Opción 2</li>
            <li><BsCheckCircle /> Opción 3</li>
            <li><BsCheckCircle /> Opción 4</li>
            <li><BsCheckCircle /> Opción 5</li>
            <li><BsCheckCircle /> Opción 6</li>
            <li><BsCheckCircle /> Opción 7</li>
            <li><BsCheckCircle /> Opción 8</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Precio: $100</h2>
          <Button variant="primary">Agregar al carrito</Button>
        </div>
      </div>
    </div>
  )
}

export default DetailTiendaOnline;
