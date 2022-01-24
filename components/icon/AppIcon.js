import React from 'react';

export default function AppIcon({ icon, alt }) {
    return (
        <section className="relative w-32 h-40 flex flex-col justify-center items-center hover:cursor-pointer">
            <div className='w-24 h-24 bg-white hover:scale-105 grid 
                place-items-center shadow-md mt-4 rounded-[20px] cursor-pointer
                transition-all ease-in-out'>
                <img src={`/assets/icons/${icon}.svg`} alt={alt} width={50} />
            </div>
            <h4 className='m-2 text-ocean text-lg font-thin'>{alt}</h4>
        </section>
    )
}
