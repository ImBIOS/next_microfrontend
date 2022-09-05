import Head from "next/head";
import styles from "../styles/Home.module.css";

// Importing modules
const Header = (await import("fe1/header")).default;
const squareRoot = (await import("fe2/getSquareRoot")).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Header />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Square root of 4: {squareRoot(4)}</h1>
      </main>
    </div>
  );
}
