import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';


export default function AppIcon({ icon, alt }) {
    const [hovered, setHovered] = useState(false)
    return (
        <section className=" relative w-40 h-40  flex flex-col justify-center items-center hover:cursor-pointer m-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='relative w-[6.5rem] h-[6.5rem] bg-white grid 
                place-items-center rounded-[100px] cursor-pointer transition-all ease-linear overflow-hidden shadow-lg'>
                <motion.img src={`/assets/icons/${icon}.svg`} alt={alt}
                    animate={hovered ? { width: 50, y: -20 } : { width: 60, y: 0 }}
                    transition={{ duration: 0.2 }} />
                <motion.aside className='absolute bottom-0 flex w-1/2 justify-around items-center '
                    animate={hovered ? { y: [50, -22] } : { y: 50 }}
                    transition={{ duration: 0.3 }}>
                    <AiOutlineEye size={20} className="text-ocean hover:bg-ocean hover:text-white hover:p-[2px] rounded-full" />
                    <FaPen size={12} className="text-gray-700 hover:text-ocean " />
                </motion.aside>
            </div>
            <h4 className='m-2 text-gray-500 text-lg font-thin'>{alt}</h4>
        </section>
    )
}
