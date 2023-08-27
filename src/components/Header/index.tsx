import React from 'react'
import './Header.css'
import Logo from '../Logo'
import Input from '../Input'
import User from '../User'
import MenuMobile from '../MenuMobile'

function Header() {
  return (
    <header className='header'>
        <Logo />
        <Input placeholder='Busque por algo' width={'752px'} top='16px' bottom='16px'/>
        <User />
        <MenuMobile />
        
    </header>
  )
}

export default Header
