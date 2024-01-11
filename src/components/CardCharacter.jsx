import React from "react";
import styles from "./cardCharacter.module.css";
import { useNavigate } from "react-router-dom";

export default function CardCharacter({
  id,
  name,
  image,
  species,
  status,
  gender,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.box} onClick={() => navigate(`/detail/${id}`)}>
      <img src={image} alt={name} className={styles.img} />
      <div className={styles.character}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.species}>{species}</p>
        <p className={styles.status}>{status}</p>
        <p className={styles.gender}>{gender}</p>
      </div>
    </div>
  );
}
