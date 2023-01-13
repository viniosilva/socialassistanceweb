import Link from "next/link";
import styles from "./Layout.module.css";
import Image from "next/image";
import BarMenu from "./bar-menu";
import { SyntheticEvent } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default ({ children }: Props) => {
  const barMenuOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const menu = document.querySelector(
      `div.${styles.container} div.${styles.menu}`
    );

    if (!menu?.classList.contains(styles.show)) {
      menu?.classList.add(styles.show);
    } else {
      menu?.classList.remove(styles.show);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <BarMenu className={styles.headerBarMenu} onClick={barMenuOnClick} />
        <Image
          className={styles.logo}
          src="/../public/logo.png"
          alt="logo"
          width={115}
          height={66}
        />
      </header>
      <div className={styles.menu}>
        <nav>
          <BarMenu onClick={barMenuOnClick} className={styles.barMenu} />
          <ul>
            <li>
              <Link href="/">Relatórios</Link>
            </li>
            <li>
              <Link href="/familias">Famílias</Link>
            </li>
            <li>
              <Link href="/pessoas">Pessoas</Link>
            </li>
            <li>
              <Link href="/recursos">Recursos</Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>{children}</main>
    </div>
  );
};
