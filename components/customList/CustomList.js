import React from 'react';
import AppIcon from '../icon/AppIcon';

export default function CustomList({ title = "Title" }) {
    return (
        <section>
            <div>
                <h2 className='text-ocean text-4xl mb-5'>{title}</h2>
                <div className='h-[1px] bg-blue-200 w-full' />
            </div>
            <div className='flex mt-5 mb-10 justify-start items-center'>
                <AppIcon icon="facebook" alt='Facebook' />
                <AppIcon icon="google" alt='Google' />
                <AppIcon icon="discord" alt='Discord' />
                <div className='h-10 w-10 bg-ocean m-4 -mt-5 ml-10 grid place-items-center rounded-full cursor-pointer'>
                    <p className='text-3xl text-white'>+</p>
                </div>
            </div>
        </section>
    )
}
