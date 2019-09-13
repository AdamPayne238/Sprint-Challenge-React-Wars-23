import React, { useEffect, useState } from "react";
import axios from "axios";
import StartWarsCard from './StarWarsCard.js';




function CharacterList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
      })
      .then(response => {
        const character = response.data.results;
        console.log("response", response.data.results);
        setCharacter(character);
      });
  }, []);

  return (

   <div>

          {character.map(characters => {

            return (
              <StartWarsCard
                name={characters.name}
                height={characters.height}
                mass={characters.mass}
                gender={characters.gender}
                hair_color={characters.hair_color}
              />
            );
          })}
   
   </div>

  );

}

export default CharacterList;