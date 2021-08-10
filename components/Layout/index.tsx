import Head from "next/head";
import { ReactNode } from "react";
import Header from "../Header";
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {

  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Ari Abdurrahman Ghufron</title>
        <meta name="description" content="Hi, this my website with NextJs, i am Ari Abdurrahman Ghufron. I live in Tegal, Indonesia. I\'m very interested in javascript. If you want to ask something, feel free to contact me. I`am familiar with React." />
        <meta name="author" content="Ari Abdurrahman Ghufron" />
        <meta name="keywords" content="NextJs, Web Profile, Ari Abdurrahman Ghufron, React App, Web Profile React, Web Profile NextJs, " />
        <link rel="icon" href="/ari.ico" />
      </Head>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}
