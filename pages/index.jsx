import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProgrammerSam | Home</title>
        <meta name="icon" />
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet lot a fol ka de la more abreviales.
        </p>
        <Link className={styles.btn} href="/hackers">
          See Hacker Listing
        </Link>
      </div>
    </>
  );
}
