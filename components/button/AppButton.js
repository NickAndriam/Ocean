import React from 'react'

export default function AppButton({ title = "see", onClick, className }) {
    return (
        <div className={`px-6 py-2 cursor-pointer rounded-full m-1 ${className}`} onClick={onClick}>
            <p className='text-white'>{title}</p>
        </div>
    )
}
