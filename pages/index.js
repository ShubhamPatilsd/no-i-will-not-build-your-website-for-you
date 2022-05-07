import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import data from "../data/rant.md";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>I Will Not Build For You</title>
        <meta
          name="description"
          content="A guide to not falling in the common developer trap."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Made with care by</p>
          <div className={styles.attribute}>
            <Image
              src="https://avatars.githubusercontent.com/u/55328098"
              className={styles.img}
              width={54}
              height={54}
              layout="fixed"
            />{" "}
            <a href="https://shubhampatil.dev">
              <p className={styles.attribute_text}>Shubham Patil</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
