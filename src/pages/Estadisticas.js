import React, { useState, useEffect } from 'react';
import Personas from './Listado';
import './Estadisticas.css';

const Estadisticas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(Personas);
  }, []);

  const mayoresDe35 = personas.filter(persona => persona.edad > 35);

  const mayorEdad = personas.length > 0
    ? personas.reduce((personaMayor, personaActual) =>
        personaActual.edad > personaMayor.edad ? personaActual : personaMayor
      )
    : {};

  const menorEdad = personas.length > 0
    ? personas.reduce((personaMenor, personaActual) =>
        personaActual.edad < personaMenor.edad ? personaActual : personaMenor
      )
    : {};

  const personasConMayorEdad = personas.filter(persona => persona.edad === mayorEdad.edad);
  const personasConMenorEdad = personas.filter(persona => persona.edad === menorEdad.edad);

  return (
    <div className="estadisticas-container">
      <h1 className="titulo">Estadísticas</h1>
      <p>Cantidad de personas mayores de 35 años: {mayoresDe35.length}</p>
      <p>Persona(s) de mayor edad: {personasConMayorEdad.map(persona => persona.nombre).join(', ')}</p>
      <p>Persona(s) de menor edad: {personasConMenorEdad.map(persona => persona.nombre).join(', ')}</p>
    </div>
  );
};

export default Estadisticas;
