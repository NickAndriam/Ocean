import React from 'react';

export default function AppIcon({ icon, alt }) {
    return (
        <div className="relative w-32 h-40 flex flex-col justify-center items-center">
            <div className='w-24 h-24 bg-white grid place-items-center shadow-md mt-4 rounded-[20px] cursor-pointer'>
                <img src={`/assets/icons/${icon}.svg`} alt={alt} width={50} />
            </div>
            <h4 className='m-2 text-ocean text-lg font-thin'>{alt}</h4>
        </div>
    )
}
