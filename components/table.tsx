import styles from "./Table.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default ({ children, className }: Props) => {
  const cls = [styles.table, className].map((v) => v).join(" ");

  return (
    <div className={cls}>
      <table>
        {children}
        <tfoot>
          <tr>
            <td colSpan={2}>
              <button disabled>←</button>
              <button className={styles.selected}>1</button>
              <button>2</button>
              <button>3</button>
              <button>→</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
