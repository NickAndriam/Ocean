import { useState } from 'react'
import { animate, motion } from 'framer-motion'
import React from 'react'
import CoolInput from '../coolInput/CoolInput'

export default function LoginInput({ onClick, user, onKeydown, image }) {
    const [open, setOpen] = useState(false)
    const clicked = () => {
        setOpen(!open)
        onClick
    }

    const onEntered = (e) => {
        if (e.keyCode === 13) {
            onKeydown()
        }
    }

    return (
        <motion.section className='flex flex-col justify-start items-center z-[2] transition-all w-full'
            onBlur={() => setOpen(false)}
            animate={{ y: open ? -10 : 0 }}
            transition={{ duration: 0.1 }}
        >
            <div
                className={`relative bg-gray-700 w-40 h-40 rounded-full m-4 z-[2] 
                shadow-lg grid place-items-center   ${open ? 'border-2 border-ocean' : 'border-none'}
                transition-all ease cursor-pointer`}
                onClick={() => clicked()}>
                <img src={image} className={`absolute top-0 left-0 w-full h-full 
                        transition-all ease-in rounded-full 
                        ${open ? 'opacity-60' : 'opacity-100'}`}
                    alt="image" />
                {open && <motion.p className='text-white text-xl z-10'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >{user}</motion.p>}
            </div>
            <motion.div initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}>
                {!open && <h2 className='text-4xl text-gray-500 font-thin w-full'
                >Welcome
                    <span className='text-4xl text-ocean font-thin'> {user}</span>
                    !</h2>}
            </motion.div>
            <motion.div
                animate={open ?
                    { width: [0, 180], y: [-100, 0], zIndex: 1 } :
                    { width: [180, 0], y: [0, -100], zIndex: 1 }}
                transition={{ duration: 0.3 }}>
                {open && <CoolInput placeholder="Password" autoFocus={open} type="password" onKeyDown={onEntered} />}
            </motion.div>
        </motion.section >
    )
}
