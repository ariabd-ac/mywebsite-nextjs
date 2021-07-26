/* eslint-disable react/no-unescaped-entities */
import Home from "./home";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.titleAbout}>
              <h3>About</h3>
              <div className="hr"></div>
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.name}>
                <h3>Name</h3>
                <h4>Ari Abdurrahman Ghufron</h4>
              </div>
              <div className={styles.name}>
                <h3>Name</h3>
                <h4>Ari Abdurrahman Ghufron</h4>
              </div>
              <div className={styles.name}>
                <h3>Name</h3>
                <h4>Ari Abdurrahman Ghufron</h4>
              </div>
              <div className={styles.name}>
                <h3>Name</h3>
                <h4>Ari Abdurrahman Ghufron</h4>
              </div>
            </div>
          </div>
        </div>
      </Home>
    </>
  )
}
