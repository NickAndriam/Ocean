import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import LeftCard from '../leftCard/LeftCard'
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowSmLeft } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import RoundedIcon from '../roudedIcon/RoundedIcon';


export default function Leftbar() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { openLBar, openNCTab } = useSelector(s => s.animations)

    const newCategory = () => {
        dispatch({ type: 'OPEN_NCTAB', openNCTab: true })
        router.push('dashboard/add-category')
    }

    const animateLeftbar = {
        open: {
            x: ['4vw', '10vw', '10vw'],
            zIndex: [0, 0.5, 1],
            transition: { duration: 0.3 }
        },
        hide: {
            x: ['10vw', '-2vw', '10vw'],
            zIndex: 0,
            transition: { duration: 0.3 }
        }

    }
    if (router.route !== '/login') {
        return (
            <motion.section className='relative h-[80vh] w-[320px] bg-ocean rounded-[40px] z-10 shadow-lg'
                style={{ position: 'absolute', top: '50%', translateY: '-50%' }}
                variants={animateLeftbar}
                animate={openLBar ? 'open' : 'hide'}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-center text-white text-2xl m-4 font-thin">Ocean</h2>
                <h3 className="text-white mx-8 mt-10">Categories:</h3>
                <div className='mx-6  h-[55vh] overflow-y-scroll'>
                    <LeftCard title='Work' description='Cool links that i like' />
                    <LeftCard title='Social Media' description='sup sup dawgs' />
                    <LeftCard title='Work' description='Hope I remember this one' />
                </div>
                {openLBar && <RoundedIcon
                    Icon={HiArrowSmLeft}
                    bg='bg-white'
                    iColor="text-ocean"
                    iHoverColor="hover:text-white"
                    onClick={() => dispatch({ type: 'OPEN_LBAR', openLBar: !openLBar })}
                    className="absolute right-4 top-4"
                />}
                <aside className='absolute bottom-0 h-28 w-full flex justify-center items-center'>
                    <RoundedIcon Icon={AiOutlinePlus}
                        bg='bg-white'
                        iColor="text-ocean"
                        iHoverColor="hover:text-white"
                        onClick={() => newCategory()}
                    />
                </aside>
            </motion.section>
        )
    } else return null
}
