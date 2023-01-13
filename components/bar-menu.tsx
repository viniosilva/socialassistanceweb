import { SyntheticEvent } from "react";
import styles from "./BarMenu.module.css";

type Props = {
  onClick: (e: SyntheticEvent) => void;
  className?: string;
};

export default ({ onClick, className }: Props) => {
  const cls = [styles.barMenu, className].map((v) => v).join(" ");

  const menuOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const menu: Element = e.currentTarget;

    if (!menu.classList.contains(styles.close)) {
      menu.classList.add(styles.close);
    } else {
      menu.classList.remove(styles.close);
    }

    onClick(e);
  };

  return (
    <span className={cls} onClick={menuOnClick}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </span>
  );
};
