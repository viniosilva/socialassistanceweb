import styles from "./Button.module.css"

type Props = {
    children: string;
    className?: string;
}

export default ({ children, className }: Props) => {
    const cls = [styles.button, className].map(v => v).join(' ')

    return (
        <button className={cls}>
            {children}
        </button>
    );
}