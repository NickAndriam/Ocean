import React from 'react'

export default function AppButton({ title = "Click", onClick, className, color = 'text-white' }) {
    return (
        <div className={`px-6 py-2 cursor-pointer rounded-full m-1 ${className} ${color}`} onClick={onClick}>
            <p className=''>{title}</p>
        </div>
    )
}
