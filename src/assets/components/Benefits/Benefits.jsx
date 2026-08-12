import React from "react";
import "./Benefits.css";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Atención personalizada y cercana",
  "Coberturas a medida",
  "Amplia red de compañías líderes",
  "Gestión rápida y eficiente de siniestros",
];

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>¿Por qué elegirnos?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <CheckCircle className="icon" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
