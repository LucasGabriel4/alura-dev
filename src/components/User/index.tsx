import React from 'react'
import  UserPhoto   from '../../assets/Photo.svg'
import './User.css'

function User() {
  return (
    <div className='User'>
       <img src={UserPhoto} alt="Foto do Usuário" />
       <h3>Harry</h3>
    </div>
  )
}

export default User
