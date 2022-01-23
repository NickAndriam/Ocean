import React from 'react'

export default function LeftCard({ title = "title", description = "desc" }) {
    return (
        <div className='bg-white w-full h-24 rounded-[20px] flex overflow-hidden items-center my-4'>
            <div className='w-1/3 grid place-items-center'>
                <img src='/assets/svg/work.svg' alt="work" width={30} />
            </div>
            <div className='h-2/3 w-[1px] bg-blue-200' />
            <div className='mx-4 flex justify-between items-center w-2/3 '>
                <section>
                    <h2 className='text-[#00A5E9] text-xl'>{title}</h2>
                    <p className='text-[#6AD4FF] text-xs'>{description}</p>
                </section>
                <img src='/assets/svg/arrowdown.svg' alt="arrow down" width={20} />
            </div>
        </div>
    )
}
