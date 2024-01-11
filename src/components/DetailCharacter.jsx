import axios from "axios";
import styles from "./detailCharacter.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCharacter from "../hooks/useCharacter";

export default function DetailCharacter() {
  const { idCharacter } = useParams();
  const { info, getOneCharacter } = useCharacter();

  useEffect(() => {
    getOneCharacter(idCharacter);
  }, []);

  return (
    <div>
      <h1>{info.name}</h1>
    </div>
  );
}
