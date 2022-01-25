import React from 'react';
import AppIcon from '../icon/AppIcon';
import RoundedIcon from '../roudedIcon/RoundedIcon';
import { AiOutlinePlus } from 'react-icons/ai';



export default function CustomList({ title = "Title" }) {
    return (
        <section className='relative'>
            <div>
                <h2 className='text-ocean text-4xl mb-3'>{title}</h2>
                <div className='h-[0.2px] rounded-full bg-blue-100 w-full ml-4' />
            </div>
            <div className='relative flex mt-5 mb-10 ml-5 justify-start items-center overflow-x-scroll'>
                <AppIcon icon="facebook" alt='Facebook' />
                <AppIcon icon="google" alt='Google' />
                <AppIcon icon="discord" alt='Discord' />
                <AppIcon icon="discord" alt='Discord' />
                <AppIcon icon="discord" alt='Discord' />
                <AppIcon icon="discord" alt='Discord' />
                <AppIcon icon="discord" alt='Discord' />
            </div>
            <div className='absolute top-32 transform -right-14'>
                <RoundedIcon Icon={AiOutlinePlus} iColor="text-white" />
            </div>
        </section>
    )
}
