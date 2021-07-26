/* eslint-disable @next/next/no-img-element */
import styles from './CardLeft.module.css'
import { GrFacebook, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function CardLeft() {
  return (
    <div className={styles.container}>
      <div className={styles.coverPhoto}>
        <div className={styles.boxPhoto}>
          <img src="./ava2.png" alt="avatar" className={styles.avatar} />
        </div>
        {/* <div className={styles.boxPhoto}>
          <div className={styles.img}>
            <img src="./ava2.png" alt="avatar" className={styles.avatar} />
          </div>
        </div> */}
      </div>
      <div className={styles.coverSocial}>
        <ul>
          <li>
            <a
              className="sosmed"
              href="https://www.facebook.com/elitkill008"
              target="_blank" rel="noreferrer"
            >
              <GrFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://twitter.com/ariabd_id"
              target="_blank" rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://www.instagram.com/ariabd.ac/"
              target="_blank" rel="noreferrer"
            >
              <GrInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://www.linkedin.com/in/ariabdac007/"
              target="_blank" rel="noreferrer"
            >
              <GrLinkedinOption size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://github.com/ariabd-ac"
              target="_blank" rel="noreferrer"
            >
              <FaGithub size={20} />

            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
