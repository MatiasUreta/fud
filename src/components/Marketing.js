import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DetailLogoBasic from "./DetailLogoBasic";
import DetailLogoPremium from "./DetailLogoPremium";
import DetailDisenoGrafico from "./DetailDisenoGrafico";
import DetailPosicionamiento from "./DetailPosicionamiento"; // Importa el componente DetailPosicionamiento
import DetailCommunity from "./DetailCommunity"; // Importa el componente DetailCommunity
import DetailEmail from "./DetailEmail"; // Importa el componente DetailEmail
import DetailAds from "./DetailAds"; // Importa el componente DetailAds

// Import your icons
import icon1 from "../assets/img/fases-seo.webp";
import icon2 from "../assets/img/community.jpg";
import icon3 from "../assets/img/email.png";
import icon4 from "../assets/img/facebook-ads.jpeg";

export const Marketing = () => {

    const PlanWeb = [
        {
            title: "Posicionamiento Web",
            description: "Un plan económico para obtener un logotipo simple pero efectivo.",
            icon: icon1,
        },
        {
            title: "Community Manager",
            description: "Un plan premium para obtener un logotipo personalizado y único.",
            icon: icon2,
        },
        {
            title: "Email Marketing",
            description: "Diseñamos Flyers, tarjetas de presentación, dibujos, etc",
            icon: icon3,
        },
        {
            title: "Campañas Publicitarias",
            description: "Diseñamos Flyers, tarjetas de presentación, dibujos, etc",
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
                                    <h2>Planes de Diseño Gráfico</h2>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Pane eventKey="first">
                                            <p>Elige el plan que mejor se adapte a tus necesidades.</p>
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
                activePlan.title === "Posicionamiento Web" ? <DetailPosicionamiento plan={activePlan} /> :
                    activePlan.title === "Community Manager" ? <DetailCommunity plan={activePlan} /> :
                        activePlan.title === "Email Marketing" ? <DetailEmail plan={activePlan} /> :
                            activePlan.title === "Campañas Publicitarias" ? <DetailAds plan={activePlan} /> :
                                null
            )}
        </section>
    )
}

export default Marketing
