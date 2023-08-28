import React from 'react';
import { useParams } from 'react-router-dom';
import Listado from './Listado';
import './BuscarPersona.css'; 

export default function Detalle() {
  const { id } = useParams();
  const personaSeleccionada = Listado.find(persona => persona.id === id);

  return (
    <div className="detail-container">
      <div className="detail-card">
        <p className="detail-heading">{personaSeleccionada.nombre} {personaSeleccionada.apellido}</p>
        <p className="detail-info detail-bold">Edad: {personaSeleccionada.edad} años</p>
        <p className="detail-info">Email: {personaSeleccionada.email}</p>
      </div>
    </div>
  );
}
