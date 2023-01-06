import Link from "next/link";
import styles from "./Layout.module.css"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <nav className={styles.menu}>
                <ul>
                    <li><Link href="/">Relatórios</Link></li>
                    <li><Link href="/familias">Famílias</Link></li>
                    <li><Link href="/pessoas">Pessoas</Link></li>
                    <li><Link href="/recursos">Recursos</Link></li>
                </ul>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}