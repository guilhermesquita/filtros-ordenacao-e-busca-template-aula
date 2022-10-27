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

  function buscaId(e){
    props.setIdFilter(e.target.value)
  }

  function buscaNome(e){
    props.setNomeFilter(e.target.value)
  }

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" value={props.idFilter} onChange={buscaId}/>
      <input type="text" placeholder="Buscar por nome" value={props.nameFilter} onChange={buscaNome}/>
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