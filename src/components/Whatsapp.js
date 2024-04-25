import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

const Whatsapp = () => {
  const phoneNumber = '541121634422'; // Número de teléfono en formato internacional

  return (
    <div>
        <Button className="Agregar" style={{ backgroundColor: '#00aaff', borderColor: '#00aaff' }} onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}>
          <FaWhatsapp /> Consultar
        </Button>
    </div>
  )
}

export default Whatsapp;
