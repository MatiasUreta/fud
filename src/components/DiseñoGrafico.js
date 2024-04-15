import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DetailLogoBasic from "./DetailLogoBasic";
import DetailLogoPremium from "./DetailLogoPremium";

// Import your icons
import icon1 from "../assets/img/diseno1.jpg";
import icon2 from "../assets/img/diseno3.jpg";


export const DiseñoGrafico = () => {

    const PlanWeb = [
        {
            title: "Diseño de logo plan básico",
            description: "Un plan económico para obtener un logotipo simple pero efectivo.",
            icon: icon1,
        },
        {
            title: "Diseño de logo plan premium",
            description: "Un plan premium para obtener un logotipo personalizado y único.",
            icon: icon2,
        },
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
                                    <h2>Planes de Diseño de Logotipos</h2>

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
                activePlan.title === "Diseño de logo plan básico" ? <DetailLogoBasic plan={activePlan} /> :
                activePlan.title === "Diseño de logo plan premium" ? <DetailLogoPremium plan={activePlan} /> :
                null
            )}
        </section>
    )
}
export default DiseñoGrafico
