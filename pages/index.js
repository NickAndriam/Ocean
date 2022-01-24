import { motion } from "framer-motion";
import { useRouter } from "next/router";
import AppButton from "../components/button/AppButton";
import AppHead from "../components/common/Head";


export default function Home() {
  const router = useRouter()
  return (
    <>
      <AppHead title="Welcome" />
      <main className="absolute top-0 left-0 w-screen h-screen">
        <div className="relative w-full h-full">
          <section className=" absolute top-40 left-1/2 -translate-x-1/2
            flex flex-col justify-center items-center w-full ">
            <motion.img src="/assets/svg/logo.svg"
              alt="logo"
              width={150}
              className="m-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}>
              <p className="lg:text-4xl text-3xl text-gray-500">Welcome to <span className="lg:text-4xl text-3xl text-ocean">Ocean </span>!</p>
            </motion.div><br />
            <AppButton title="Login" onClick={() => router.push('/login')} className="bg-ocean hover:bg-blue-300" />
            {/* <AppButton title="Sign Up" onClick={() => router.push('/login')} color={"ocean"} className="bg-gray-400 hover:bg-ocean" /> */}
          </section>
        </div>
      </main>
    </>
  )
}

