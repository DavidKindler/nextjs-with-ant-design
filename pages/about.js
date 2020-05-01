import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout page={'about'}>
      <Head>
        <title>About page</title>
      </Head>
      <h1>About Page</h1>
    </Layout>
  )
}

export default About
