import Head from 'next/head'
import Hero from '../compons/Hero'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
      <Hero />
      </div>
    </>
  )
}
