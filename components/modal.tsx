import { SyntheticEvent } from "react";
import styles from "./Modal.module.css";

type Props = {
  title: string;
  onClose: (e: SyntheticEvent) => void;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default ({ title, onClose, children, className }: Props) => {
  const cls = [styles.modal, className].map((v) => v).join(" ");

  return (
    <div className={styles.background}>
      <div className={cls}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
