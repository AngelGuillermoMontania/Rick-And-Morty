import axios from "axios";
import { useEffect, useState } from "react";

function useCharacter() {
  const [info, setInfo] = useState([]);

  function getAllCharacters(tipoStatus = undefined) {
    axios(
      `https://rickandmortyapi.com/api/character${
        tipoStatus ? `?status=${tipoStatus}` : ""
      }`
    )
      .then(({ data }) => {
        setInfo(data.results);
      })
      .catch((error) => console.log(error));
  }

  function getOneCharacter(idCharacter) {
    axios(`https://rickandmortyapi.com/api/character/${idCharacter}`)
      .then(({ data }) => setInfo(data))
      .catch((error) => console.log(error));
  }

  return {
    info,
    getAllCharacters,
    getOneCharacter,
  };
}

export default useCharacter;
