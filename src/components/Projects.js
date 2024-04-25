import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/siamo.png";
import projImg2 from "../assets/img/losa.png";
import projImg3 from "../assets/img/valhalla.png";
import projImg4 from "../assets/img/siamotienda.png";
import projImg5 from "../assets/img/losamenu.png";
import projImg6 from "../assets/img/valhallashop.png";
import projImg7 from "../assets/img/diseno1.jpg";
import projImg8 from "../assets/img/diseno2.jpg";
import projImg9 from "../assets/img/diseno3.jpg";
import projImg10 from "../assets/img/diseno4.jpg";
import projImg11 from "../assets/img/diseno5.jpg";
import projImg12 from "../assets/img/diseno6.jpg";
import projImg13 from "../assets/img/logo-negro.png";
import projImg14 from "../assets/img/logo-positivo-negativo.png";
import projImg15 from "../assets/img/logo-blanco-y-negro.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tienda Online",
      description: "Desarrollo Web",
      imgUrl: projImg1,
    },
    {
      title: "Landing Page",
      description: "Desarrollo Web",
      imgUrl: projImg2,
    },
    {
      title: "Single Page",
      description: "Desarrollo Web",
      imgUrl: projImg3,
    },
    {
      title: "Tienda Online",
      description: "Desarrollo Web",
      imgUrl: projImg4,
    },
    {
      title: "Landing Page",
      description: "Desarrollo Web",
      imgUrl: projImg5,
    },
    {
      title: "Single Page",
      description: "Desarrollo Web",
      imgUrl: projImg6,
    },
  ];

  const graphicDesignProjects = [
    {
      title: "Proyecto 1",
      description: "Diseño Gráfico",
      imgUrl: projImg7,
    },
    {
      title: "Proyecto 2",
      description: "Diseño Gráfico",
      imgUrl: projImg8
    },
    {
      title: "Proyecto 3",
      description: "Diseño Gráfico",
      imgUrl: projImg9,
    },
    {
      title: "Proyecto 4",
      description: "Diseño Gráfico",
      imgUrl: projImg10,
    },
    {
      title: "Proyecto 5",
      description: "Diseño Gráfico",
      imgUrl: projImg11,
    },
    {
      title: "Proyecto 6",
      description: "Diseño Gráfico",
      imgUrl: projImg12,
    },
  ];

  const logoDesignProjects = [
  
    {
      title: "Logo Contrastes",
      description: "Diseño de Logos",
      imgUrl: projImg14,
    },
    {
      title: "Logotipo e Isotipos",
      description: "Diseño de Logos",
      imgUrl: projImg13,
    },
    {
      title: "Logo Positivo y Negativo",
      description: "Diseño de Logos",
      imgUrl: projImg15,
    },

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Porfolio</h2>
                  <p>Nuestro portafolio es un reflejo de nuestra habilidad para transformar tus ideas en realidad a través de herramientas de desarrollo y diseño. Estamos emocionados por la posibilidad de dar vida a tus ideas y ayudarte a destacar en el mundo digital.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Desarrollo Web </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Diseño Gráfico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Diseño de Logos</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p> Nos especializamos en la creación de sitios web que son tanto visualmente atractivos como funcionalmente robustos.

                          Ya sea que necesites una tienda online para vender tus productos, un sitio web responsive que se vea y funcione bien en todos los dispositivos, o una aplicación web personalizada para satisfacer tus necesidades específicas, tenemos la experiencia y las habilidades para hacerlo realidad.

                          Contratar a un desarrollador web es invertir en la presencia online de tu marca. Un sitio web bien diseñado y desarrollado puede aumentar tu visibilidad, atraer a más clientes y generar más ventas.

                          Permítenos ayudarte a crear una presencia online que refleje la identidad de tu marca, atraiga a tu público objetivo y te ayude a alcanzar tus objetivos de negocio. ¡Estamos listos para llevar tu presencia online al siguiente nivel!</p>
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> Nos especializamos en capturar la esencia de tu negocio y traducirla en diseños visuales que conectan y resuenan. Nuestra experiencia y creatividad nos permiten crear soluciones de diseño que no solo son estéticamente atractivas, sino también estratégicamente efectivas.<br />
                          Contratar a un diseñador gráfico es invertir en la imagen de tu marca. Un buen diseño gráfico puede diferenciar tu negocio, captar la atención de tu público objetivo y comunicar tu mensaje de manera efectiva.</p>
                        <Row>
                          {
                            graphicDesignProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>En nuestro portafolio, verás cómo el sector de diseño puede hacer que tu logo destaque. Nos especializamos en crear logos que no solo son visualmente atractivos, sino que también cuentan la historia de tu marca y resuenan con tu público objetivo. Nuestro enfoque estratégico asegura que tu logo no solo sea memorable, sino que también tenga un impacto duradero. ¡Permítenos ayudarte a diseñar un logo que realmente represente a tu marca y haga que tu negocio brille en el mercado!</p>
                        <Row>
                          {
                            logoDesignProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
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
