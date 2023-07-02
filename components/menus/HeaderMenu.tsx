import Link from "next/link"

import * as styles from './headermenu.module.css'

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
      <Link href="/about">About</Link>
    </div>
  )
}

export default HeaderMenu