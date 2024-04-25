import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckCircle, BsFileEarmark, BsArrowDownUp, BsImages, BsCreditCard, BsTruck, BsSearch, BsFillEnvelopeFill, BsLink45Deg, BsGraphUp, BsPhoneLandscape, BsCash, BsShieldLock } from "react-icons/bs";
import colorSharp from "../assets/img/color-sharp.png"
import { BsWhatsapp } from 'react-icons/bs';
import { BsBook, BsPencilSquare } from 'react-icons/bs';
import Whatsapp from './Whatsapp';

const DetailAds = () => {
    return (
        <section className="skill" id="skills" style={{ marginTop: '70px' }}>
            <div className="container">
                <div className="skill-bx wow zoomIn" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1 1 60%', marginRight: '20px' }}>
                        <div className='divItemList'>
                            <ul className="my-list" style={{ marginLeft: '20px', lineHeight: '2.5', textAlign: 'left' }}>
                                <li className='itemDetail'><BsGraphUp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Creación y gestión de campañas publicitarias</li>
                                <li className='itemDetail'><BsSearch style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Segmentación de público objetivo</li>
                                <li className='itemDetail'><BsLink45Deg style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Optimización de la tasa de conversión</li>
                                <li className='itemDetail'><BsArrowDownUp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Análisis y ajuste de las campañas</li>
                                <li className='itemDetail'><BsImages style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Diseño de anuncios atractivos</li>
                                <li className='itemDetail'><BsShieldLock style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Cumplimiento de las políticas de publicidad</li>
                                <li className='itemDetail'><BsWhatsapp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Integración con redes sociales</li>
                                <li className='itemDetail'><BsPhoneLandscape style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Campañas adaptadas a todos los dispositivos</li>
                                <li className='itemDetail'><BsBook style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Informes detallados de rendimiento</li>
                                <li className='itemDetail'><BsPencilSquare style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Redacción de copys persuasivos para anuncios</li>
                            </ul>
                        </div>
                    </div>
                    {/* Este div contiene los precios. Ahora tiene alignSelf: 'center', lo que lo alinea en el centro del espacio disponible a la derecha */}
                    <div className="col-md-4" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '5px', flex: '1 1 30%', alignSelf: 'center' }}>
                        <h2 style={{ margin: '15px', color: 'pink' }}>Plan de Campañas Publicitarias</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h4>Consultar</h4>
                        </div>
                        <hr style={{ borderTop: '1px solid #777' }} />
                        <p style={{ textAlign: 'center', color: '#777', marginBottom: '20px' }}>Pago único</p>
                        <hr style={{ borderTop: '1px solid #777' }} />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Whatsapp />
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default DetailAds
