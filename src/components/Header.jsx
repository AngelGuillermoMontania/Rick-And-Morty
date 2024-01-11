import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} onClick={() => navigate("/")}>
            Rick And Morty API
          </h1>
          <div className={styles.sectionFilter}>
            <Link to="/status/dead">Dead</Link>
            <Link to="/status/alive">Alive</Link>
            <Link to="/status/unknown">Unknown</Link>
          </div>
          <p className={styles.text}>
            Este proyecto ilustra los personajes de la famosa serie Rick And
            Morty
          </p>
        </div>
      </div>
    </header>
  );
}
