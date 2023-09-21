import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [buscarId, setBuscarId] = useState()
  const [buscarName, setBuscarName] = useState()

  return (
    <>
      <GlobalStyle />
      <Header buscarId = {buscarId} setBuscarId = {setBuscarId} buscarName = {buscarName} setBuscarName = {setBuscarName}/>
      <CardsContainer>
        {pokemons.filter((pokemon)=>{
          return buscarId ? pokemon.id.includes(buscarId) : pokemon
        })
        .filter((pokemon)=>{
          return buscarName ? pokemon.name.english.toLocaleLowerCase().includes(buscarName) : pokemon
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
