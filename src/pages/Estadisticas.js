import Personas from './Listado';
import './Estadisticas.css';

export default function Estadisticas() {
let mayoresEdad = 0;
let personaMasGrande = [{edad: 0}]
let personaMasChica = [{edad: 100}]

for (let i = 0; i < Personas.length; i++) {
if (Personas[i].edad > 35) {
mayoresEdad++;
}

if (personaMasGrande[0].edad < Personas[i].edad) {
personaMasGrande = [Personas[i]]
}
else if (personaMasGrande[0].edad === Personas[i].edad) {
personaMasGrande.push(Personas[i])
}

if (personaMasChica[0].edad > Personas[i].edad) {
personaMasChica = [Personas[i]]
}
else if (personaMasChica[0].edad === Personas[i].edad) {
personaMasChica.push(Personas[i])
}
}

let textoGrande = "La persona más grande es: " + personaMasGrande[0].nombre;
if (personaMasGrande.length > 1) {
  textoGrande = "Las personas más grandes son: ";
  personaMasGrande.forEach(Persona => {
  textoGrande += Persona.nombre + ", "
  });
  textoGrande = textoGrande.slice(0, -2)
  }
  
  let textoChico = "La persona más chica es: " + personaMasChica[0].nombre;
  
  if (personaMasChica.length > 1) {
  textoChico = "Las personas más chicas son: ";
  personaMasChica.forEach(Persona => {
  textoChico += Persona.nombre + ", "
  });
  textoChico = textoChico.slice(0, -2);
  }
  
  return (
    <div className="stats-container">
      <h1 className="stats-heading">Estadísticas de Personas</h1>
      <p className="stats-info">Cantidad de personas mayores de 35: {mayoresEdad}</p>
      <ul className="stats-person-list">
        <li className="stats-person-item">{textoGrande}</li>
        <li className="stats-person-item">{textoChico}</li>
      </ul>
    </div>
  );
}