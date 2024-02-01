import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
    const userId = params.userId
    return (
        <div className='text-center'>
            You are searching about user <span className='font-bold'>{userId}</span>
        </div>
    )
}

export default UserDetails
