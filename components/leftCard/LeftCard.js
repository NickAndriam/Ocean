import React, { useState } from 'react'
import RoundedIcon from '../roudedIcon/RoundedIcon'
import { BiChevronDown, BiNotepad } from 'react-icons/bi';


export default function LeftCard({ title = "title", description = "desc" }) {

    const [hovered, setHovered] = useState(false)
    return (
        <section className='bg-white hover:bg-ocean hover:border hover:border-white w-full h-24 rounded-[20px] flex  items-center my-4 cursor-pointer transition-all ease-linear'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='w-1/3 grid place-items-center'>
                {/* <img src='/assets/svg/work.svg' alt="work" width={30} /> */}
                <BiNotepad className={hovered ? 'text-white' : 'text-ocean'} size={30} />
            </div>
            <div className={`h-2/3 w-[1px] ${hovered ? 'bg-primary' : 'bg-poolblue'}`} />
            <div className='mx-4 flex justify-between items-center w-2/3 '>
                <section>
                    <h2 className={`${hovered ? 'text-white' : 'text-ocean'} text-xl`}>{title}</h2>
                    <p className={`text-xs ${hovered ? "text-white" : 'text-gray-500'}`}>{description}</p>
                </section>
                <RoundedIcon Icon={BiChevronDown}
                    bgHover="hover:bg-transparent"
                    className={`bg-transparent text-[22px] hover:text-white ${hovered && 'text-white'}`}
                    iColor={'text-ocean'}
                />
            </div>
        </section>
    )
}
