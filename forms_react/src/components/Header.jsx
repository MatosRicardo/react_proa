import styles from "./CSS/Header.module.css";

function Header() {
  return (
    <>
      <section className={styles.header}>
        <ul>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Instrumentos</li>
          <li>Endereço</li>
          <li>Contato</li>
        </ul>
      </section>
    </>
  );
}

export default Header;
