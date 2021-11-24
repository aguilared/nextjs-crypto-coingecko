import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import App from "./App";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Welcome to Nextjs-Cripto-CoinDecko</p>
        <div className={styles.grid}>
          <App />
        </div>
      </main>
    </div>
  );
}
