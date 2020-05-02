import Link from 'next/link'
import Head from 'next/head'
import DefaultLayout from '../components/layout'

const About = () => {
  return (
    <DefaultLayout page={'about'}>
      <Head>
        <title>About page</title>
      </Head>
      <h1>About Page</h1>
    </DefaultLayout>
  )
}

export default About
