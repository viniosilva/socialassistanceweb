import Head from 'next/head';
import Layout from '../../components/layout';

export default () => {
    return (
        <>
            <Head>
                <title>Pessoas | Assistencia Social</title>
                <meta name="description" content="Pessoas | Assistencia Social | Ad. Brás Jardim Novo Mundo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1>Pessoas</h1>
            </Layout>
        </>
    )
}