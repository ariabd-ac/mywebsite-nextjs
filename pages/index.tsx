/* eslint-disable react/no-unescaped-entities */
import Home from "./home";
import styles from "./home.module.css"

export default function Welcome() {
  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.hi}>
            <h3>Hello, I'am </h3>
          </div>
          <div className={styles.name}>
            <h1>Ari Abdurrahman</h1>
            <h1>Ghufron</h1>
          </div>
          <div className={styles.jobs}>
            <h4>Front-end Developer</h4>
          </div>
          <div className={styles.garis}>
            <div className="hr"></div>
          </div>
          <div className={styles.desc}>
            <p>A Junior front-end developer from Tegal, Indonesia.</p>
            <b>I build web apps and mobile apps that provide intuitive and pixel-perfect user interfaces.</b>
          </div>
        </div>
      </Home>
    </>
  )
}
