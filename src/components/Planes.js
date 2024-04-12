import React from 'react';

const Plan = ({ plan }) => (
  <div className="plan">
    <h2>{plan.title}</h2>
    <h3><s>{plan.oldPrice}</s> <span className="highlight">{plan.newPrice}</span> /mes</h3>
    <ul>
      {plan.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button>Agregar al carrito</button>
    <p>{plan.details}</p>
  </div>
);

const Subscription = () => {
  const plan = {
    title: 'Plan Premium',
    oldPrice: '$19.99',
    newPrice: '$9.99',
    features: ['Dominio gratis', 'SSL gratis', 'Soporte 24/7', 'Garantía de devolución de dinero'],
    details: 'Este es un plan premium que ofrece una serie de características adicionales para mejorar tu experiencia.'
  };

  return (
    <div className="subscription">
      <Plan plan={plan} />
    </div>
  );
};

export default Subscription;
