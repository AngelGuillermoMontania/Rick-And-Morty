import { useEffect } from "react";
import styles from "./containCharacters.module.css";
import CardCharacter from "./CardCharacter";
import useCharacter from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

export default function ContainCharacters() {
  const { info, getAllCharacters } = useCharacter();

  const { byStatus } = useParams();

  useEffect(() => {
    getAllCharacters(byStatus);
  }, [byStatus]); // []  1 ejec      [{}, {}, {}]  2 ejec      [{}, {}, {}]   [{}, {}, {}]
  //  undefined 1ejec

  return (
    <div className={styles.container}>
      <div className={styles.characters}>
        {info &&
          info.map((item) => (
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
