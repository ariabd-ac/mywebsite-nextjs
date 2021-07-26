import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/"><a>Welcome</a></Link>
          </li>
          <li className={styles.item}>
            <Link href="/profile"><a>Profile</a></Link>
          </li>
          <li className={styles.item}>
            <Link href="/resume"><a>Resume</a></Link>
          </li>
          <li className={styles.item}>
            <Link href="/portofolio"><a>Portofolio</a></Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </header>
    </>
  )
}
