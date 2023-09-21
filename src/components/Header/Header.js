import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const handleBuscarId = (event) =>{
    props.setBuscarId(event.target.value)
  }

  const handleBuscarName = (event) =>{
    props.setBuscarName(event.target.value)
  }

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" value={props.buscarId} onChange={handleBuscarId}/>
      <input type="text" placeholder="Buscar por nome" value={props.buscarName} onChange={handleBuscarName}/>
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
