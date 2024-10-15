import styles from "./CSS/Menu4.module.css";
import whats from "./assets/whats.png";
import insta from "./assets/insta.png";
import face from "./assets/face.png";

function Menu4() {
  return (
    <>
      <section className={styles.menu4}>
        <div className={styles.forms}>
          <label htmlFor="">Entre com seu nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            className={styles.input}
          />

          <label htmlFor="">Entre com seu e-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail..."
            className={styles.input}
          />

          <textarea placeholder="Faça seu pedido aqui..."></textarea>
          <button>Enviar</button>
        </div>
        <div className={styles.icons}>
          <h1>Acesse também nossas redes sociais:</h1>
          <img src={whats} alt="" />
          <img src={insta} alt="" />
          <img src={face} alt="" />
        </div>
      </section>
    </>
  );
}

export default Menu4;
