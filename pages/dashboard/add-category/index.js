import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import AppHead from '../../../components/common/Head';

export default function AddCategory() {
    const router = useRouter()
    return (
        <>
            <AppHead title='New Category' />
            <aside className='absolute top-0 left-0 w-screen h-screen bg-gray-700 opacity-90 z-50'
                onClick={() => router.push('/dashboard')}
            />
            <motion.section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            lg:w-[40vw] w-[80vw] h-[60vh] bg-white z-50 rounded-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
            </motion.section>
        </>
    );
}
