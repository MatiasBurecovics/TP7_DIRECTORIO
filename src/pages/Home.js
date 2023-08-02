
import ReactDOM from "react-dom/client";
import React from 'react';
import { Link } from 'react-router-dom';
import Personas from './Listado.js'; 

export default function Home() {
  return (
    <div>
      <h1>Listado de Personas</h1>
      <ul>
        {Personas.map((persona) => (
          <li key={persona.id}>
            <Link to={`/persona/${persona.id}`}>{persona.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

