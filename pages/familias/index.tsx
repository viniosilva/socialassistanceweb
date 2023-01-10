import ReactDOM from "react-dom";
import Head from "next/head";
import { useEffect, useState, SyntheticEvent } from "react";
import Button from "../../components/button";
import Layout from "../../components/layout";
import Table from "../../components/table";
import { getFamilies } from "../../integrations/social-assistence-api";
import Family from "../../models/family";
import styles from "./Familias.module.css";
import Modal from "../../components/modal";

export default () => {
  const [data, setData] = useState([] as Family[]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    console.log("hi");
    getFamilies().then((data) => setData(data));
  }, []);

  const newOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    setShowModal(true);
    setModalTitle("Nova Família");
  };

  const closeModal = (e: SyntheticEvent) => {
    e.preventDefault();

    setShowModal(false);
  };

  const modal = (
    <Modal title={modalTitle} onClose={closeModal}>
      <p>Hi</p>
    </Modal>
  );

  return (
    <>
      <Head>
        <title>Famílias | Assistencia Social</title>
        <meta
          name="description"
          content="Famílias | Assistencia Social | Ad. Brás Jardim Novo Mundo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showModal && modal}
      <Layout>
        <h1>Famílias</h1>
        <article className={styles.container}>
          <div className={styles.options}>
            <Button onClick={newOnClick}>Novo</Button>
          </div>
          <Table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => (
                <tr key={`family:${d.id}`}>
                  <th>{d.name}</th>
                  <td>{`${d.street}, ${d.number} - ${d.city}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </article>
      </Layout>
    </>
  );
};
