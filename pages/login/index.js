import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LoginInput from '../../components/loginInput/LoginInput'
import { useRouter } from 'next/router'
import Filter from '../../components/filter/Filter'
import axios from 'axios'

export default function DefaultLogin() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        await axios.get('/api/user')
            .then(res => setUsers([res.data]))
    }, [1])
    const router = useRouter()
    const onOpening = () => {
        router.push('/')
    }




    return (
        <div>
            <div className='absolute transform top-[28vh] left-1/2 -translate-x-1/2 w-[60vw] flex'>
                {users.map(user =>
                    <LoginInput key={user?.id} onKeydown={() => onOpening()} user={user?.name} image={user?.image} />
                )}
            </div>
        </div>
    )
}

