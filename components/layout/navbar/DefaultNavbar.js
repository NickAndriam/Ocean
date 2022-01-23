import Link from "next/link"
import { useRouter } from 'next/router'

export default function Navbar (context){
  const router = useRouter()
  const path = router.asPath
  const languageOptions = router.locales.map(locale => <Link href={path} locale={locale} key={locale}><span className="mx-5 cursor-pointer">{locale}</span></Link>)

  return (
    <nav>
      <div>
        <div>
          This is the navbar
        </div>
        <div>
          {languageOptions}
        </div>
      </div>
    </nav>
  )
}