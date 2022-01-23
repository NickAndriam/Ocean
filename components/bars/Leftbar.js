import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'

export default function Leftbar() {
    const router = useRouter()
    console.log(router)
    if (router.route !== '/login') {
        return (

            <motion.div className='h-[85vh] w-[300px] bg-ocean rounded-[40px] z-10 shadow-lg'
                style={{ position: 'absolute', top: '50%', translateY: '-50%' }}
                animate={{ x: ['0vw', '10vw'] }}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
        )
    } else return null
}
