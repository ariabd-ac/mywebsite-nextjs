/* eslint-disable react/no-unescaped-entities */
import { IconContext } from "react-icons";
import { BiCodeCurly } from "react-icons/bi";
import { FaMoneyCheckAlt, FaRegLightbulb } from "react-icons/fa";
import { GiCutDiamond, GiPowerLightning } from "react-icons/gi";
import Home from "./home";
import styles from "./contact.module.css";


export default function Contect() {
  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Contact</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              <div className={styles.tableWrap}>
                <div className={styles.contentTable}>
                  <div>
                    <h3 className={styles.servicesDesc}>
                      <b>SLAWI - KAB. TEGAL - INDONESIA</b>
                    </h3>
                    <h4 className={styles.servicesDesc}>
                      JL. Melati No.37 RT 03 RW 03 Kel. Pakembaran, Kec. Slawi, Kab. Tegal, Jawa Tengah
                    </h4>
                    <h4 className={styles.servicesDesc}>
                      52415
                    </h4>
                    <h4 className={styles.servicesDesc}>
                      <a href="https://wa.me/6283113729917" >+62 831-1372-9917</a>  | ariabghufron@gmail.com
                    </h4>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.listIcon}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2442815082827!2d109.12962531434812!3d-6.9804756702947435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnNDkuNyJTIDEwOcKwMDcnNTQuNSJF!5e0!3m2!1sid!2sid!4v1602178921050!5m2!1sid!2sid"
                width="100%"
                height="250vh"
                aria-hidden="false"
              >
              </iframe>
            </div>
          </div>

        </div>
      </Home>
    </>
  )
}
