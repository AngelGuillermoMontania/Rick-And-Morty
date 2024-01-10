import { useState, useEffect } from "react";
import styles from "./containCharacters.module.css";
import CardCharacter from "./CardCharacter";

export default function ContainCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.characters}>
        {characters &&
          characters.map((item) => (
            <CardCharacter
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              species={item.species}
              status={item.status}
              gender={item.gender}
            />
          ))}
      </div>
    </div>
  );
}
