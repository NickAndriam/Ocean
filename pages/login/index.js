import { useEffect, useState } from 'react'
import LoginInput from '../../components/loginInput/LoginInput'
import { useRouter } from 'next/router'
import axios from 'axios'
import AppHead from '../../components/common/Head'

export default function DefaultLogin() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        await axios.get('/api/user')
            .then(res => setUsers([res.data]))
    }, [1])
    const router = useRouter()
    const onOpening = () => {
        router.push('/dashboard')
    }

    return (
        <>
            <AppHead title='Login' />
            <main>
                <section className='absolute transform top-[28vh] left-1/2 -translate-x-1/2 w-[60vw] flex'>
                    {users.map(user =>
                        <LoginInput key={user?.id} onKeydown={() => onOpening()} user={user?.name} image={user?.image} />
                    )}
                </section>
            </main>
        </>
    )
}

