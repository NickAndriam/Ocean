import { useEffect, useState } from "react"
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 200)
  }, [1])
  return (
    <>
      <main>
        <Filter />
        {route !== '/' && <Leftbar />}
        {route !== '/' && <RightBar />}
        {children}
      </main>
    </>
  )
}