import React, { useState } from 'react';

const Servicios = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="skill" id="skills">
            <div className='container'>
                <button className="expand-button button-style" onClick={toggleContent}>
                    Tienda Online: <span>¿WordPress o React?</span>
                </button>
                {isExpanded && (
                    <>
                        <div className="service-info">
                            <h3>Tienda Online con WordPress</h3>
                            <p>
                                ¿Qué es?: Imagina WordPress como una herramienta versátil para construir sitios web. Es como una caja de herramientas con muchas opciones.
                            </p>
                            <p>
                                Beneficios:
                                <ul>
                                    <li>Simplicidad: Con WordPress, los procesos pueden ser más simples y en menor tiempo.</li>
                                    <li>Personalización: Hay muchos temas y complementos disponibles para darle el aspecto y las funciones que desean.</li>
                                </ul>
                            </p>
                            <p>Recomendado para: Negocios pequeños o sitios web centrados en contenido y facilidad de uso.</p>
                        </div>
                        <div className="service-info">
                            <h3>Tienda Online con React</h3>
                            <p>
                                ¿Qué es?: React es como una varita mágica para hacer que tu sitio web sea rápido y moderno.
                            </p>
                            <p>
                                Beneficios:
                                <ul>
                                    <li>Interactividad: Puedes crear una experiencia de usuario dinámica e interactiva.</li>
                                    <li>Escalabilidad: React es excelente para sitios web grandes y complejos.</li>
                                </ul>
                            </p>
                            <p>Recomendado para: Negocios que buscan una tienda online rápida, personalizada y escalable.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Servicios;
