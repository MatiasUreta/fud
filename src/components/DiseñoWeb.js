import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DetailTiendaOnline from "./DetailTiendaOnline";
import DetailEmprendedores from "./DetailEmprendedores";
import DetailEmpresas from "./DetailEmpresas";
import DetailAutogestion from "./DetailAutogestion";

// Import your icons
import icon1 from "../assets/img/tienda.webp";
import icon2 from "../assets/img/landing.webp";
import icon3 from "../assets/img/empresas.webp";
import icon4 from "../assets/img/autogestion.webp";

export const DiseñoWeb = () => {

    const PlanWeb = [
        {
            title: "Diseño de Página Web para Tiendas Online",
            description: "¿Querés tener un sitio para vender de forma online, ya sea servicios o productos y aumentar tus ingresos? Esta es tu opción!",
            icon: icon1,
        },
        {
            title: "Diseño Web para Emprendedores",
            description: "¿Sos emprendedor o tenés tu negocio y buscás un diseño web económico que te impulse a nivel digital? Podemos ayudarte.",
            icon: icon2,
        },
        {
            title: "Diseño Web para Empresas",
            description: "¿Estás buscando mejorar la marca de tu empresa y tener un sitio web profesional? Esta es tu opción!",
            icon: icon3,
        },
        {
            title: "Diseño de Página Web Autogestionable en WordPress",
            description: "¿Querés tener tu página web para subir contenidos y realizar cambios de forma rápida, simple y fácil? Esta es tu opción!",
            icon: icon4,
        }
    ];

    const [activePlan, setActivePlan] = useState(null);

    const handlePlanClick = (plan) => {
        if (activePlan === plan) {
            setActivePlan(null); 
        } else {
            setActivePlan(plan);
        }
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
                                            <p>Si puedes imaginarlo, podemos crearlo.</p>
                                            <Row className="d-flex justify-content-around">
                                                {
                                                    PlanWeb.map((project, index) => {
                                                        return (
                                                            <div className="border p-2 m-2" style={{ width: '20%', textAlign: 'center' }} onClick={() => handlePlanClick(project)}>
                                                                <img src={project.icon} alt={project.title} style={{ width: '100%' }} />
                                                                <h3>{project.title}</h3>
                                                            </div>
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
            {/* Aquí se muestra el componente correspondiente según el plan activo */}
            {activePlan && (
                activePlan.title === "Diseño Web para Emprendedores" ? <DetailEmprendedores plan={activePlan} /> :
                activePlan.title === "Diseño Web para Empresas" ? <DetailEmpresas plan={activePlan} /> :
                activePlan.title === "Diseño de Página Web Autogestionable en WordPress" ? <DetailAutogestion plan={activePlan} /> :
                <DetailTiendaOnline plan={activePlan} />
            )}
        </section>
    )
}
export default DiseñoWeb
