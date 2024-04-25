import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaLaptopCode, FaStore, FaFileAlt, FaPenNib, FaPaintBrush, FaUserFriends, FaBullhorn, FaChartLine } from 'react-icons/fa'; // Importa los íconos

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Define los servicios de tu agencia
  const services = [
    { title: 'Diseño de Web', icon: <FaLaptopCode style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Tiendas Online', icon: <FaStore style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Diseño de Landing Page', icon: <FaFileAlt style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Diseño de Logos', icon: <FaPenNib style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Diseño Gráfico', icon: <FaPaintBrush style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Community Manager', icon: <FaUserFriends style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Marketing y Posicionamiento', icon: <FaChartLine style={{ fontSize: '5em', color: 'pink' }} /> },
    { title: 'Campañas Publicitarias', icon: <FaBullhorn style={{ fontSize: '5em', color: 'pink' }} /> },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Servicios</h2>
                        <p>Nuestro equipo se compone por programadores Full Stack, Diseñadores Gráficos y Community Manager.<br></br> Lo que nos hace ser la MEJOR opción a la hora de impulsar tu marca.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {services.map((service, index) => (
                                <div className="item" key={index}>
                                    {service.icon}
                                    <h5>{service.title}</h5>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
