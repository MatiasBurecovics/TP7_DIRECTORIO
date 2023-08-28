import React from 'react';
import { Link } from 'react-router-dom';
import Personas from './Listado.js';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Listado de Personas</h1>
      <ul className="person-list">
        {Personas.map((persona) => (
          <li className="person-list-item" key={persona.id}>
            <Link to={`BuscarPersona/${persona.id}`} className="person-link">
              {persona.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
