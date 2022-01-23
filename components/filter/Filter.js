import { useRouter } from 'next/router'
import React from 'react'

export default function Filter({ show = true }) {
    const router = useRouter()
    const route = router.route
    return (
        <div className={`w-screen h-screen ${route !== '/login' && 'bg-gray-100'} overflow-hidden -z-10`}  >
            <img src={route === '/login' ? "/assets/svg/loginshape.svg" : "/assets/svg/mainshape.svg"}
                alt="bg-image" className='w-screen h-screen object-cover' />
        </div>
    )
}
