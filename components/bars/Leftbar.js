import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import LeftCard from '../leftCard/LeftCard'
import AppButton from '../../components/button/AppButton';



export default function Leftbar() {
    const router = useRouter()
    if (router.route !== '/login') {
        return (
            <motion.div className='relative h-[85vh] w-[320px] bg-ocean rounded-[40px] z-10 shadow-lg'
                style={{ position: 'absolute', top: '50%', translateY: '-50%' }}
                animate={{ x: ['0vw', '10vw'] }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center text-white text-2xl m-4 font-thin">Ocean</h2>
                <div className=' mx-8 mt-10'>
                    <h3 className="text-white">Categories:</h3>
                    <br />
                    <LeftCard title='Work' description='Lorem Ipsum just dummy' />
                    <LeftCard title='Social Media' description='Lorem Ipsum just dummy' />
                    <LeftCard title='Work' description='Lorem Ipsum just dummy' />
                </div>
                <section className='absolute bottom-0 h-52 w-full flex justify-center items-center'>
                    <div className='h-10 w-10 bg-[#9DDCF6] grid place-items-center rounded-full mr-3'>
                        <h2 className="text-4xl text-white cursor-pointer">+</h2>
                    </div>
                    <AppButton title="More" className="bg-white h-10" color='text-ocean' />
                </section>
            </motion.div>
        )
    } else return null
}
