import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout page='first'>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>

    </Layout>
  )
}

export default FirstPost
