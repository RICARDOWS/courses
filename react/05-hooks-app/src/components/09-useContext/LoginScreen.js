import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext)

  const userData ={
    id: 1234,
    name: 'Ricardo',
    email: 'test@test.com',
    password: '!@#$%^&*'
  }
  
  return (
    <>
    <h1>LoginScreen</h1>
    <hr/>

    <button className='btn btn-primary' onClick={() => setUser(userData)}>
      Agregar User
    </button>
    </>
  )
}
