import styles from "./CSS/Footer.module.css";
import whats from "./assets/whats.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";

function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <p>
          Nossa Loja - Instrumentos Musicais <br /> Rua Tito, 54 - Lapa <br />{" "}
          São Paulo - Brasil{" "}
        </p>

        <img src={whats} alt="" className={styles.futi} />
        <img src={insta} alt="" className={styles.futi} />
        <img src={face} alt="" className={styles.futi} />
      </section>
    </>
  );
}

export default Footer;
