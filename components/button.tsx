import { SyntheticEvent } from "react";
import styles from "./Button.module.css"

type Props = {
    children: string;
    onClick: (e: SyntheticEvent) => void;
    className?: string;
}

export default ({ children, onClick, className }: Props) => {
    const cls = [styles.button, className].map(v => v).join(' ')
    
    return (
        <button className={cls} onClick={onClick} >
            {children}
        </button>
    );
}