/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from "react";
import dataJSON from '../public/assets/data/data.json';
import Home from "./home";
import styles from "./portofolio.module.css";
import { useRouter } from 'next/router'






interface PortofolioProps {
  dataGit: Array<any>
}



export default function Portofolio(props: PortofolioProps) {

  const { dataGit } = props;
  const data = dataJSON.portofolio;
  const dataMobile = dataJSON.portofolio.web;

  const router = useRouter()



  console.log("dw: ", data);


  console.log("data: ", dataGit);

  const [website, setWebsite] = useState(true);

  return (
    <>
      <Home>
        <div className={styles.container}>
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>Gihub Repo</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              <div className={styles.wrapGitRepo}>
                {dataGit.map(dg => {
                  return (
                    <div className={styles.containerRepo} key={dg.id} >
                      <img src="https://placeimg.com/240/135/tech" alt="Image" />
                      <div className={styles.descGit}>
                        <h3>{dg.name}</h3>

                        <Link href={dg.clone_url} passHref={true}>
                          <button className={styles.buttonToGit}>Visit</button>
                        </Link>
                        {/* <a href="{dg.html_url}">Visit</a> */}
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
          {/* portofolio */}
          <div className={styles.education}>
            <div className={styles.wraperTitle}>
              <div className={styles.titleAbout}>
                <h3>My Portofolio</h3>
                <div className="hr"></div>
              </div>
            </div>
            <div className={styles.wrapEdu}>
              <div className={styles.wrapPortofolio}>
                <div className={styles.menuPorto}>
                  <div className={styles.website} onClick={() => setWebsite(true)}>
                    <h2 >Website</h2>
                  </div>
                  <div className={styles.website} onClick={() => setWebsite(false)}>
                    <h2> Mobile</h2>
                  </div>
                </div>
                <div className={styles.contentPorto}>
                  {
                    website ?
                      <>
                        {data.web.map(dw => {
                          return (
                            <>

                              <div className={styles.childPorto} key={dw.id}>
                                <div className={styles.imageChild} onClick={() => router.push(`${dw.url}`)}>
                                  <img src={`assets/images/${dw.images}`} alt="aa" />
                                </div>
                                <div className={styles.contentChild}>
                                  <h2>{dw.title}</h2>
                                  <h4>{dw.role}</h4>
                                  <p>{dw.desc}</p>
                                  <div className={styles.ulPorto}>
                                    <div className={styles.tech}>
                                      <ul>
                                        {dw.tech.map((te, index) => {
                                          return (
                                            <li key={index}>{te}</li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                    <div className={styles.tool}>
                                      <ul>
                                        {dw.tools.map((tol, index) => {
                                          return (
                                            <li key={index}>{tol}</li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>


                            </>
                          )
                        })}
                      </> :
                      <>
                        {data.mobile.map(dw => {
                          return (
                            <>

                              <div className={styles.childPorto} key={dw.id}>
                                <div className={styles.imageChild} onClick={() => router.push(`${dw.url}`)}>
                                  <img src={`assets/images/${dw.images}`} alt="aa" />
                                </div>
                                <div className={styles.contentChild}>
                                  <h2>{dw.title}</h2>
                                  <h4>{dw.role}</h4>
                                  <p>{dw.desc}</p>
                                  <div className={styles.ulPorto}>
                                    <div className={styles.tech}>
                                      <ul>
                                        {dw.tech.map((te, index) => {
                                          return (
                                            <li key={index}>{te}</li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                    <div className={styles.tool}>
                                      <ul>
                                        {dw.tools.map((tol, index) => {
                                          return (
                                            <li key={index}>{tol}</li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>


                            </>
                          )
                        })}
                      </>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </Home>
    </>
  )
}


export async function getServerSideProps() {
  const url = `https://api.github.com/users/ariabd-ac/repos`
  const response = await fetch(url);
  const dataGit = await response.json();
  return {
    props: {
      dataGit
    }, // will be passed to the page component as props
  }
}
