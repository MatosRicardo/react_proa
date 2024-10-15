import styles from "./CSS/Menu3.module.css";

function Menu3() {
  return (
    <>
      <section className={styles.menu3}>
        <div className={styles.div1}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122783307643!2d-46.6943404893994!3d-23.52808587873433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1729031153924!5m2!1spt-BR!2sbr"></iframe>
        </div>
        <div className={styles.div2}>
          <h1>Nossa Loja - Instrumentos Musicais</h1>
          <p>
            Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda
            Becker, em uma construção do século XIX, numa área de 500m2,com uma
            variada gama de instrumentos, em uma ambiente agradavel para toda a
            familía
          </p>
        </div>
      </section>
    </>
  );
}

export default Menu3;
