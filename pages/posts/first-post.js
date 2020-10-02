import Head from 'next/head'
import Link from "next/link"
import Layout from '../../components/layout'

export default function FirstPost() {
  return(
    <Layout>
      <Head>
        <title>hello world</title>
      </Head>
      <div>
        hello post
      </div>
      
      <div>
        <Link href="/">head back</Link>
      </div>
    </Layout>
  )
}
