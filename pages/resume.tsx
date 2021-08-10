/* eslint-disable react/no-unescaped-entities */
import { IconContext } from "react-icons";
import { BiCodeCurly } from "react-icons/bi";
import { FaMoneyCheckAlt, FaRegLightbulb } from "react-icons/fa";
import { GiCutDiamond, GiPowerLightning } from "react-icons/gi";
import Home from "./home";
import styles from "./resume.module.css";


export default function Resume() {
  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>Internship & Work Experience</h3>
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
                    <h5 className={styles.timeSch}>May - August 2021</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  {/* <div className={styles.dot}></div> */}
                  <div>
                    <h5 className={styles.titleSch}>
                      Internship at Bangbeli.com (Malang)
                    </h5>
                    <p className={styles.descSch}>
                      Bangbeli.com is a startup in the field of digital payment transactions.
                      In this internship I worked on a slicing design for a website page using reactjs,
                      then made a webview for an android application.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>June - August 2021</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Freelance Website Developer at BPSDA Pemali Comal (Tegal)
                    </h5>
                    <p className={styles.descSch}>
                      Within three months, my team and I worked on the fighter website.
                      Where the website is useful for monitoring the time and ordering of land rentals
                      which are still manual then a system is made
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>Jan - Maret 2021</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Freelance Website Developer at BPSDA Bodri Kuto (Semarang)
                    </h5>
                    <p className={styles.descSch}>
                      Create an APEMASI system to monitor the water flow in each weir,
                      with the weir guard sending SMS to the system then the water flow will be updated,
                      and create a dynamic weir scheme
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>Nov - December 2020</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Freelance Website Developer at BPSDA Pemali Comal (Tegal)
                    </h5>
                    <p className={styles.descSch}>
                      Creating a webview application where initially the dam guard sent SMS was
                      replaced by an application to make it easier if there were problems
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>June - Sept 2020</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Freelance Website Developer at BPSDA Pemali Comal (Tegal)
                    </h5>
                    <p className={styles.descSch}>
                      Repair and update the application then add two schemes in the finished system at pemalicomal.com
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>Sept - December 2019</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Freelance Website Developer at BPSDA Pemali Comal (Tegal)
                    </h5>
                    <p className={styles.descSch}>
                      Create an APEMASI system to monitor the water flow in each weir,
                      with the weir guard sending SMS to the system then the water flow will be updated,
                      and create a dynamic weir scheme
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.tableWrap}>
                <div className={styles.timeTable}>
                  <div>
                    <h5 className={styles.timeSch}>July - Sept 2019</h5>
                  </div>
                </div>
                <div className={styles.contentTable}>
                  <i className="dot"></i>
                  <div>
                    <h5 className={styles.titleSch}>
                      Internship at Imersa Solusi Teknologi
                    </h5>
                    <p className={styles.descSch}>
                      Imersa is an Information Technology and Services company with website design services, application development, and digital marketing.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* endd */}
          {/* start skill */}
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Skill</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>HTML5</h4>
                  <h4>95%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill95}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>CSS</h4>
                  <h4>80%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill80}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>React JS</h4>
                  <h4>80%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill80}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>React Native</h4>
                  <h4>75%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill78}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>PHP</h4>
                  <h4>85%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill85}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>Express</h4>
                  <h4>70%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill70}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>Flutter</h4>
                  <h4>60%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill60}></div>
                </div>
              </div>
              <div className={styles.wrapSkill}>
                <div className={styles.titleAndPersent}>
                  <h4>Multimedia</h4>
                  <h4>90%</h4>
                </div>
                <div className={styles.batang}>
                  <div className={styles.persentSkill90}></div>
                </div>
              </div>
            </div>
          </div>
          {/* end skill */}
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Services</h3>
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
                    <p className={styles.servicesDesc}>
                      I always give the best effort for each projects I did. I give a solution with my creative app.
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
                  <FaRegLightbulb />
                  <h4>Creative Idea</h4>
                </div>
                <div className={styles.icon}>
                  <BiCodeCurly />
                  <h4>Clean Code</h4>
                </div>
                <div className={styles.icon}>
                  <FaMoneyCheckAlt />
                  <h4>Low Budget</h4>
                </div>
                <div className={styles.icon}>
                  <GiCutDiamond />
                  <h4>Best Result</h4>
                </div>
                <div className={styles.icon}>
                  <GiPowerLightning />
                  <h4>Fast Code</h4>
                </div>
              </IconContext.Provider>
            </div>
          </div>

        </div>
      </Home>
    </>
  )
}
