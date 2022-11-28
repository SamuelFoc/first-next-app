import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Hackers.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { hackers: data },
  };
};

const Hackers = ({ hackers }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ProgrammerSam | Hackers</title>
        <meta name="icon" />
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <div>
        <h1>All Hackers</h1>
        {hackers.map((hacker) => (
          <div key={hacker.id} className={styles.hackerItem}>
            <h3>{hacker.name}</h3>
            <button
              className={styles.hackerBtn}
              onClick={() => router.push(`/hackers/${hacker.id}`)}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hackers;
