import Head from 'next/head'
import Layout  from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Rory's website</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey it's me</p>
        <p>
          We're learning Next
        </p>
      </section>
    </Layout>
  )
}
