/* eslint-disable @next/next/no-img-element */
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
            <h3>Ari Abdurrahman</h3>
            <h3>Ghufron</h3>
          </div>
          <div className={styles.jobs}>
            <h4>Front-end Developer</h4>

          </div>
          <div className={styles.garis}>
            <div className="hr"></div>
          </div>
          <div className={styles.desc}>
            <h5>A Junior front-end developer from Tegal, Indonesia.</h5>
            <p>I build web apps and mobile apps that provide intuitive and pixel-perfect user interfaces.</p>
            <div className={styles.gits}>
              <img src="https://github-readme-stats.vercel.app/api?username=ariabd-ac&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true" alt="gitstar" />
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ariabd-ac&show_icons=true&hide=jupyter%20notebook&hide_border=true&layout=compact&langs_count=8" alt="most-language" />
            </div>
          </div>
        </div>
      </Home>
    </>
  )
}
