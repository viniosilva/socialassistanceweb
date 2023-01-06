import Head from 'next/head';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Table from '../../components/table';
import styles from './Familias.module.css';

export default () => {
    return (
        <>
            <Head>
                <title>Famílias | Assistencia Social</title>
                <meta name="description" content="Famílias | Assistencia Social | Ad. Brás Jardim Novo Mundo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1>Famílias</h1>
                <article className={styles.container}>
                    <div className={styles.options}>
                        <Button>Novo</Button>
                    </div>
                    <Table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Sobrenome</th>
                                <th>Casa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Fulano</th>
                                <td>R. Sd. Teodoro Francisco Ribeiro 60</td>
                            </tr>
                            <tr>
                                <th>Ciclano</th>
                                <td>R. J 195</td>
                            </tr>
                        </tbody>
                    </Table>
                </article>
            </Layout>
        </>
    )
}