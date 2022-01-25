import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BiMenuAltLeft } from 'react-icons/bi';
import { motion } from 'framer-motion';


function RoundedIcon({ bg = 'bg-ocean', bgHover, iColor, iHoverColor, Icon, onClick, className }) {
    const { openLBar } = useSelector(s => s.animations)
    const dispatch = useDispatch()
    return (
        <>
            <motion.aside className={`${className} ${bg} ${bgHover} ${iColor} ${iHoverColor} hover:bg-gray-700 h-10 w-10 rounded-full grid place-items-center cursor-pointer`}
                // onClick={() => dispatch({ type: 'OPEN_LBAR', openLBar: !openLBar })}
                onClick={onClick}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* <BiMenuAltLeft color="white" /> */}
                <Icon />
            </motion.aside>
        </>
    )
}

export default RoundedIcon;
