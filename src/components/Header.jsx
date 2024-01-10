import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Rick And Morty API</h1>
          <p className={styles.text}>
            Este proyecto ilustra los personajes de la famosa serie Rick And
            Morty
          </p>
        </div>
      </div>
    </header>
  );
}
