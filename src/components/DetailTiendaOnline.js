import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckCircle, BsFileEarmark, BsArrowDownUp, BsImages, BsCreditCard, BsTruck, BsSearch, BsFillEnvelopeFill, BsLink45Deg, BsGraphUp, BsPhoneLandscape, BsCash, BsShieldLock } from "react-icons/bs";
import colorSharp from "../assets/img/color-sharp.png"
import Whatsapp from './Whatsapp';

const DetailTiendaOnline = () => {
    return (
        <section className="skill" id="skills" style={{ marginTop: '70px' }}>
            <div className="container">
                <div className="skill-bx wow zoomIn" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1 1 60%', marginRight: '20px' }}>
                        <div className='divItemList'>
                            <ul className="my-list" style={{ marginLeft: '20px', lineHeight: '2.5', textAlign: 'left' }}>
                                <li className='itemDetail'><BsCheckCircle style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Personalización a medida</li>
                                <li className='itemDetail'><BsFileEarmark style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Hasta 8 Páginas internas</li>
                                <li className='itemDetail'><BsArrowDownUp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Administrar subida y modificación de productos</li>
                                <li className='itemDetail'><BsImages style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Contenido que quieras mostrar (textos/imágenes)</li>
                                <li className='itemDetail'><BsCreditCard style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Elegí las formas de pago (Mercado Pago / PayPal / Transferencia / Efectivo)</li>
                                <li className='itemDetail'><BsTruck style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Diferentes formas de entrega (Envío gratis, Retiro por tienda, Envío con costo)</li>
                                <li className='itemDetail'><BsSearch style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Buscador de productos</li>
                                <li className='itemDetail'><BsFillEnvelopeFill style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Formulario de contacto</li>
                                <li className='itemDetail'><BsLink45Deg style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Enlace a redes sociales</li>
                                <li className='itemDetail'><BsGraphUp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Optimización para Google</li>
                                <li className='itemDetail'><BsPhoneLandscape style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Optimización para todos los dispositivos</li>
                                <li className='itemDetail'><BsCash style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Optimización para generar ventas</li>
                                <li className='itemDetail'><BsShieldLock style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Optimización de velocidad y seguridad</li>
                            </ul>
                        </div>
                    </div>
                    {/* Este div contiene los precios. Ahora tiene alignSelf: 'center', lo que lo alinea en el centro del espacio disponible a la derecha */}
                    <div className="col-md-4" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '5px', flex: '1 1 30%', alignSelf: 'center' }}>
                        <h2 style={{ margin: '15px', color: 'pink' }}>Tienda Online</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h4>Tienda Online $350</h4>
                            <h4>Abono Mensual $50</h4>
                        </div>
                        <hr style={{ borderTop: '1px solid #777' }} />
                        <p style={{ textAlign: 'center', color: '#777', marginBottom: '20px' }}>Contratación de dominio GRATIS por un año</p>
                        <hr style={{ borderTop: '1px solid #777' }} />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Whatsapp />
                        </div>
                    </div>
                </div>
                <div style={{ border: '1px solid pink', padding: '20px', borderRadius: '5px', marginTop: '20px', textAlign: 'center', alignSelf: 'flex-end' }}>
                    <p>El HOST no está incluido en el servicio</p>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>



    )
}

export default DetailTiendaOnline;
