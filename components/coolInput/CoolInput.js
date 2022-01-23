import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

export default function CoolInput({ placeholder, ...otherProps }) {
    return (
        <div className='relative w-full h-10 bg-white rounded-full border-2 border-blue-400'>
            <input placeholder={placeholder} className='bg-transparent w-full h-full pl-4 placeholder:text-gray-400' {...otherProps} />
            <BiRightArrow className='absolute transform top-1/2 -translate-y-1/2 right-2 text-blue-500' />
        </div>
    )
}
