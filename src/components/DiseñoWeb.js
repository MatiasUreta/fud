import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tienda.webp";
import projImg2 from "../assets/img/landing.webp";
import projImg3 from "../assets/img/empresas.webp";
import projImg4 from "../assets/img/autogestion.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const DiseñoWeb = () => {

    const PlanWeb = [
        {
            title: "Diseño de Página Web para Tiendas Online",
            description: "¿Querés tener un sitio para vender de forma online, ya sea servicios o productos y aumentar tus ingresos? Esta es tu opción!",
            imgUrl: projImg1,
        },
        {
            title: "Diseño de Página Web Económica",
            description: "¿Sos emprendedor o tenés tu negocio y buscás un diseño web económico que te impulse a nivel digital? Podemos ayudarte.",
            imgUrl: projImg2,
        },
        {
            title: "Diseño de Página Web para Empresas",
            description: "¿Estás buscando mejorar la marca de tu empresa y tener un sitio web profesional? Esta es tu opción!",
            imgUrl: projImg3,
        },
        {
            title: "Diseño de Página Web Autogestionable en WordPress",
            description: "¿Querés tener tu página web para subir contenidos y realizar cambios de forma rápida, simple y fácil? Esta es tu opción!",
            imgUrl: projImg4,
        }
    ];

    const [activePlan, setActivePlan] = useState(null);

    const handlePlanClick = (plan) => {
        setActivePlan(plan);
    };

    return (
        <section className="PlanWeb" id="projects">
            <Container>
                <Row>
                    <Col size={16}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Planes de Diseño Web</h2>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Pane eventKey="first">
                                            <p>Elegí el tipo de página web que mejor se adapte a tu negocio. </p>
                                            <Row>
                                                {
                                                    PlanWeb.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                                onClick={() => handlePlanClick(project)}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
export default DiseñoWeb
