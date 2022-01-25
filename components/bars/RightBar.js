import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '../avatar/Avatar'
import CustomList from '../customList/CustomList'
import { BiMenuAltLeft } from 'react-icons/bi';
import RoundedIcon from '../roudedIcon/RoundedIcon'



export default function RightBar() {
    const { openLBar } = useSelector(s => s.animations)
    const dispatch = useDispatch()
    const router = useRouter()

    const animationRightBar = {
        open: {
            x: openLBar ? '50%' : '45%',
            transition: { duration: 0.3 },
        }
    }
    if (router.route !== '/login') {
        return (
            <motion.section className={`lg:h-[90vh] md:h-[90vh] h-[98vh] lg:w-[70vw] w-[98vw] bg-primary rounded-[50px] shadow-lg`}
                style={{ position: 'absolute', top: '50%', y: '-50%', right: '45%', x: '50%' }}
                variants={animationRightBar}
                animate='open'
            >
                <Avatar />
                <section className={`absolute transform top-24 
                        ${openLBar ? 'lg:left-[20%] md:left-[25%] left w-[60%]' : 'left-[5%] w-[80%]'} 
                        transition-all ease-linear`}>
                    <CustomList title='Social Media' />
                    <CustomList title="Interesting Links" />
                </section>
                {!openLBar && <RoundedIcon
                    className="absolute top-6 left-6"
                    bg='bg-ocean'
                    iColor="text-white"
                    iHoverColor="hover:text-white"
                    onClick={() => dispatch({ type: 'OPEN_LBAR', openLBar: !openLBar })}
                    Icon={BiMenuAltLeft} />}
            </motion.section>
        )
    } else return null
}
