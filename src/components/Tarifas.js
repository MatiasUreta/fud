import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Tarifas = () => {
    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Tarifas Abril 2024</h2>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Desarrollo Web </Nav.Link>
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
                            <p> Precios Desarrollo Web</p>
                            
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <p> Nos especializamos en capturar la esencia de tu negocio y traducirla en diseños visuales que conectan y resuenan. Nuestra experiencia y creatividad nos permiten crear soluciones de diseño que no solo son estéticamente atractivas, sino también estratégicamente efectivas.<br />
                              Contratar a un diseñador gráfico es invertir en la imagen de tu marca. Un buen diseño gráfico puede diferenciar tu negocio, captar la atención de tu público objetivo y comunicar tu mensaje de manera efectiva.</p>
                           
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <p>En nuestro portafolio, verás cómo el sector de diseño puede hacer que tu logo destaque. Nos especializamos en crear logos que no solo son visualmente atractivos, sino que también cuentan la historia de tu marca y resuenan con tu público objetivo. Nuestro enfoque estratégico asegura que tu logo no solo sea memorable, sino que también tenga un impacto duradero. ¡Permítenos ayudarte a diseñar un logo que realmente represente a tu marca y haga que tu negocio brille en el mercado!</p>
                            
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