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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}