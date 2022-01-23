import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../avatar/Avatar'
import CustomList from '../customList/customList'

export default function RightBar() {
    const router = useRouter()
    if (router.route !== '/login') {
        return (
            <motion.div className='absolute transform top-1/2 right-0 -translate-y-1/2 
        h-[90vh] w-[70vw] bg-[#FAFAFA] rounded-[50px] shadow-lg'
                style={{ position: 'absolute', top: '50%', translateY: '-50%', right: 0 }}
                animate={{ x: ['0vw', '-10vw'] }}
                transition={{ duration: 0.5 }}
            >
                <Avatar />
                <div className='absolute right-20 top-20 w-2/3'>
                    <CustomList title='Social Media' />
                    <CustomList title="Interesting Links" />
                </div>
            </motion.div>
        )
    } else return null
}
