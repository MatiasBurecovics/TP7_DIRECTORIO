import React, { useState, useEffect } from 'react';
import Personas from './Listado';
import './Estadisticas.css';

export default function Estadisticas() {
  //falta que pasa si tienen la misma edad
  const [mayoresEdad, setMayoresEdad] = useState(0);
  const [personaMasGrande, setPersonaMasGrande] = useState({ edad: 0, nombre: '' });
  const [personaMasChica, setPersonaMasChica] = useState({ edad: 100, nombre: '' });

  useEffect(() => {
    let contadorMayoresEdad = 0;
    let maxEdad = 0;
    let minEdad = 100;

    Personas.forEach((persona) => {
      if (persona.edad > 35) {
        contadorMayoresEdad++;
      }

      if (persona.edad > maxEdad) {
        maxEdad = persona.edad;
        setPersonaMasGrande(persona);
      }

      if (persona.edad < minEdad) {
        minEdad = persona.edad;
        setPersonaMasChica(persona);
      }
    });

    setMayoresEdad(contadorMayoresEdad);
  }, []);

  let textoGrande = "La persona más grande es: " + personaMasGrande.nombre;

  if (personaMasGrande.edad !== 0) {
    textoGrande = personaMasGrande.nombre ? "La persona más grande es: " + personaMasGrande.nombre : "";
  }

  let textoChico = "La persona más chica es: " + personaMasChica.nombre;

  if (personaMasChica.edad !== 100) {
    textoChico = personaMasChica.nombre ? "La persona más chica es: " + personaMasChica.nombre : "";
  }

  return (
    <div className="stats-container">
      <h1 className="stats-heading">Estadísticas de Personas</h1>
      <p className="stats-info">Cantidad de personas mayores de 35: {mayoresEdad}</p>
      <ul className="stats-person-list">
        <li className="stats-person-item">{textoGrande}</li>
        <li className="stats-person1-item">{textoChico}</li>
      </ul>
    </div>
  );
}
