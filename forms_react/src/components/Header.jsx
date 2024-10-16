import styles from "./CSS/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className={styles.header}>
        <ul>
          {/* <li>Home</li>
          <li>Quem Somos</li>
          <li>Instrumentos</li>
          <li>Endereço</li>
          <li>Contato</li> */}
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="/">Quem Somos</Link>
          </li>
          <li>
            <Link to="/menu2">Instrumentos</Link>
          </li>
          <li>
            <Link to="/menu3">Endereço</Link>
          </li>
          <li>
            <Link to="/menu4">Contato</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;
