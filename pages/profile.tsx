/* eslint-disable react/no-unescaped-entities */
import Home from "./home";
import styles from "./profile.module.css";
import { IconContext } from "react-icons";
import { FaUser, FaPhoneAlt, FaGlobeAmericas, FaMapMarkerAlt, FaGraduationCap, FaPlane, FaCode } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { GiSpellBook } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";


export default function Profile() {
  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>About Me</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.containerAbout}>
              <IconContext.Provider
                value={{
                  color: "#fc5c1b",
                  className: "global-class-name",
                  size: "1em",
                }}
              >
                <div className={styles.aboutContent}>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <FaUser />
                      <h3>Name</h3>
                    </div>
                    <h4>Ari Abdurrahman Ghufron</h4>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <GoCalendar />
                      <h3>Date of birth</h3>
                    </div>
                    <h4>June 4th 1999</h4>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <FaPhoneAlt />
                      <h3>Phone</h3>
                    </div>
                    <h4>+62 831-1372-9917</h4>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <FiSend />
                      <h3>Email</h3>
                    </div>
                    <h4>ariabghufron@gmail.com</h4>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <FaGlobeAmericas />
                      <h3>Website</h3>
                    </div>
                    <h4>ariabd.tech</h4>
                  </div>
                  <div className={styles.name}>
                    <div className={styles.wrapperIcon}>
                      <FaMapMarkerAlt />
                      <h3>Address</h3>
                    </div>
                    <h4>Tegal, <b>Indonesia</b></h4>
                  </div>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Education</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              {/* <div className={styles.tableWrapfirsthead}>
                <div className={styles.timeTable}>
                </div>
                <div className={styles.contentTable}>
                  <FaGraduationCap />
                </div>
              </div> */}
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>2017 - 2021</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  {/* <div className={styles.dot}></div> */}
                  <div>
                    <h5 className={styles.titleSch}>
                      Bachelor of Applied Science / Polytechnic Harapan Bersama
                    </h5>
                    <p className={styles.descSch}>
                      Bachelor of Informatics Engineering in Applied Science, studied
                      self-taught programming since Vocational High School, then
                      focused on front-end website developers. Starting campus
                      programming projects, and freelance.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>2015 - 2017</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Vocational High School / SMK Bina Nusa Slawi
                    </h5>
                    <p className={styles.descSch}>
                      Multimedia major. Start learn a web design with HTML CSS.
                      Starting with the website display design and then the mobile
                      then implemented and likes to edit videos. Active in school
                      activities, and was once a Scout Leader
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>2012 - 2015</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Islamic Junior High School / MTS N Slawi
                    </h5>
                    <p className={styles.descSch}>
                      Active in school activities such as OSIS, Scouting, Paskibra and
                      participating in inter-school competitions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* endd */}
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Hobbies</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              <div className={styles.tableWrap}>
                {/* <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>2012 - 2015</h5>
                  </div>
                </div> */}
                <div className={styles.contentTable}>
                  <div>
                    <p className={styles.descSch}>
                      Enjoy the storyline deeper by reading a book, or sometimes enjoy some thrilling action scenes just to refresh myself from the routine. Traveling to a beautiful place then take several pictures can be done to find new ideas, play console game and write code to rich yeah.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.listIcon}>
              <IconContext.Provider
                value={{
                  color: "#fc5c1b",
                  className: "global-class-name",
                  size: "1.5em",
                }}
              >
                <div className={styles.icon}>
                  <GiSpellBook />
                  <h4>Book</h4>
                </div>
                <div className={styles.icon}>
                  <RiMovie2Fill />
                  <h4>Movies</h4>
                </div>
                <div className={styles.icon}>
                  <FaPlane />
                  <h4>Adventure</h4>
                </div>
                <div className={styles.icon}>
                  <IoGameControllerOutline />
                  <h4>Game</h4>
                </div>
                <div className={styles.icon}>
                  <FaCode />
                  <h4>Write Code</h4>
                </div>
              </IconContext.Provider>
            </div>
          </div>

        </div>
      </Home>
    </>
  )
}
