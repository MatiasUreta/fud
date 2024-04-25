import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DiseñoWeb from './DiseñoWeb';
import DiseñoGrafico from './DiseñoGrafico';
import Marketing from './Marketing'; // Importa el componente Marketing

const Tarifas = () => {
    const [activeTab, setActiveTab] = React.useState('first');

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Planes Abril 2024</h2>
                      <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={setActiveTab}>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Diseño Web </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Diseño Gráfico</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Marketing Digital</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            {activeTab === 'first' && <DiseñoWeb/>}
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            {activeTab === 'second' && <DiseñoGrafico/>}
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            {activeTab === 'third' && <Marketing/>} {/* Renderiza el componente Marketing */}
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }

export default Tarifas
