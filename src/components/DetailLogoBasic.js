import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckCircle, BsFileEarmark, BsArrowDownUp, BsImages, BsCreditCard, BsTruck, BsSearch, BsFillEnvelopeFill, BsLink45Deg, BsGraphUp, BsPhoneLandscape, BsCash, BsShieldLock } from "react-icons/bs";
import colorSharp from "../assets/img/color-sharp.png"
import { BsWhatsapp } from 'react-icons/bs';
import Whatsapp from './Whatsapp';

const DetailLogoBasic = () => {
    return (
        <section className="skill" id="skills" style={{ marginTop: '70px' }}>
            <div className="container">
                <div className="skill-bx wow zoomIn" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1 1 60%', marginRight: '20px' }}>
                        <div className='divItemList'>
                            <ul className="my-list" style={{ marginLeft: '20px', lineHeight: '2.5', textAlign: 'left' }}>
                                <li className='itemDetail'><BsCheckCircle style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Diseño de logo personalizado</li>
                                <li className='itemDetail'><BsImages style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Dos revisiones de diseño</li>
                                <li className='itemDetail'><BsFillEnvelopeFill style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Entrega de archivos en formato vectorial y raster</li>
                                <li className='itemDetail'><BsLink45Deg style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Uso de colores y tipografías acorde a la identidad de marca</li>
                                <li className='itemDetail'><BsWhatsapp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Comunicación constante durante el proceso de diseño</li>
                                <li className='itemDetail'><BsGraphUp style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Logo optimizado para uso en web y redes sociales</li>
                                <li className='itemDetail'><BsPhoneLandscape style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Logo optimizado para impresión en diferentes formatos</li>
                                <li className='itemDetail'><BsCash style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Precio accesible</li>
                                <li className='itemDetail'><BsShieldLock style={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' }} /> Respeto por los derechos de autor y propiedad intelectual</li>
                            </ul>

                        </div>
                    </div>
                    {/* Este div contiene los precios. Ahora tiene alignSelf: 'center', lo que lo alinea en el centro del espacio disponible a la derecha */}
                    <div className="col-md-4" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '5px', flex: '1 1 30%', alignSelf: 'center' }}>
                        <h2 style={{ margin: '15px', color: 'pink' }}>Diseño Logotipo Plan Basic</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h4>Diseño Logotipo Plan Basic $70</h4>
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

export default DetailLogoBasic