import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

function Layout ({ children, page }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />

        <title>{siteTitle}</title>
        <meta name='og:title' content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {page ? (
          <>
            <h1 className={styles.heading2Xl}>{page}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>NXP LOGO HERE</a>
            </Link>
            <h2 className={styles.headingLg}>
              <Link href='/'>
                <a className={styles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!page && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
