import Head from "next/head"
import { useRouter } from "next/router"
import Leftbar from "../bars/Leftbar"
import RightBar from "../bars/RightBar"
import Filter from "../filter/Filter"

export default function ({ children, ...props }) {
  const metaTitle = props.pageContent.pageContent?.content.metaData.metaTitle
  const metaDescription = props.pageContent.pageContent?.content.metaData.metaDescription
  const domain = process.env.VERCEL_URL || process.env.DOMAIN
  //get hreflangs
  const hreflangs = props.router.locales.map(locale => {
    return (<link key={locale} rel="alternate" href={`${domain}${locale !== props.router.defaultLocale ? '/' + locale : ''}${props.router.asPath}`} hrefLang={locale} />)
  })

  const router = useRouter()
  const route = router.route


  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} key="ogtitle" />
        <meta property="og:description" content={metaDescription} key="ogdescription" />
        {hreflangs}
        <link rel="canonical" href={domain + props.router.asPath} />
      </Head>
      <main>
        <Filter />
        {route !== '/' && <Leftbar />}
        {route !== '/' && <RightBar />}
        {children}
      </main>
    </>
  )
}