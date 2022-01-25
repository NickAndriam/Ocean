import '../styles/globals.css'
import DefaultLayout from '../components/layout/DefaultLayout'
import Head from 'next/head'
import { Provider } from 'react-redux';
import store from '../redux/store.js';
;




function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <DefaultLayout pageContent={pageProps} router={router}>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>

  )
}

export default MyApp
