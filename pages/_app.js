import '../styles/globals.css'
import DefaultLayout from '../components/layout/DefaultLayout'
import Head from 'next/head'
import DefaultLogin from './login'
import Filter from '../components/filter/Filter'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultLayout pageContent={pageProps} router={router}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>

  )
}

export default MyApp
